"use client";

import SimpleBar from "simplebar-react";
import { QuotationPrint } from "./quotation-print";
import TableBlock from "./quotation-details/table-block";
import FirstBlock from "./quotation-details/first-block";
import SecondBlock from "./quotation-details/second-block";
import OthersBlock from "./quotation-details/others-block";
import {
  QuotationType,
  quotationBuilderSchema,
  QUOTATION_BUILDER_DEFAULT_VALUE,
} from "../../../../../apps/isomorphic-i18n/src/validators/quotation-builder.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import CalcPayBlock from "./quotation-details/calc-pay-block";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

export default function InvoiceBuilder({ printRef }: { printRef: any }) {
  const methods = useForm<QuotationType>({
    mode: "onChange",
    defaultValues: QUOTATION_BUILDER_DEFAULT_VALUE,
    resolver: zodResolver(quotationBuilderSchema),
  });

  const onSubmit: SubmitHandler<QuotationType> = (data) => {};

  let subTotal = methods.watch("quotationTable").reduce((acc, item) => {
    if (!item.quantity || !item.rate) return acc;
    return acc + item.quantity * item.rate;
  }, 0);

  let totalTax = methods.watch("quotationTable").reduce((acc, item) => {
    return acc + item.tax;
  }, 0);

  return (
    <>
      <QuotationPrint
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
