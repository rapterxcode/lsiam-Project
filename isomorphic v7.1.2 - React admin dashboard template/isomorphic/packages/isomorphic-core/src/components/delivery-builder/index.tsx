"use client";

import SimpleBar from "simplebar-react";
import { DeliveryPrint } from "./delivery-print";
import TableBlock from "./delivery-details/table-block";
import FirstBlock from "./delivery-details/first-block";
import SecondBlock from "./delivery-details/second-block";
import OthersBlock from "./delivery-details/others-block";
import {
  DeliveryType,
  deliveryBuilderSchema,
  DELIVERY_BUILDER_DEFAULT_VALUE,
} from "../../../../../apps/isomorphic-i18n/src/validators/delivery-builder.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import CalcPayBlock from "./delivery-details/calc-pay-block";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

export default function DeliveryBuilder({ printRef }: { printRef: any }) {
  const methods = useForm<DeliveryType>({
    mode: "onChange",
    defaultValues: DELIVERY_BUILDER_DEFAULT_VALUE,
    resolver: zodResolver(deliveryBuilderSchema),
  });

  const onSubmit: SubmitHandler<DeliveryType> = (data) => {};

  let subTotal = methods.watch("deliveryTable").reduce((acc, item) => {
    if (!item.quantity || !item.rate) return acc;
    return acc + item.quantity * item.rate;
  }, 0);

  let totalTax = methods.watch("deliveryTable").reduce((acc, item) => {
    return acc + item.tax;
  }, 0);

  return (
    <>
      <DeliveryPrint
        ref={printRef}
        subTotal={subTotal}
        totalTax={totalTax}
        data={methods.watch()}
      />
      <div className="rounded-2xl p-8">
        <SimpleBar className="w-full">
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="mx-auto w-[840px] rounded-xl border border-gray-200 bg-white p-10 shadow-sm"
            >
              <FirstBlock setValue={methods.setValue} />
              <SecondBlock />
              <TableBlock />
              <CalcPayBlock subTotal={subTotal} totalTax={totalTax} />
              <OthersBlock />
            </form>
          </FormProvider>
        </SimpleBar>
      </div>
    </>
  );
}
