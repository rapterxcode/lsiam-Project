'use client';

import { DatePicker } from '../../../ui/datepicker';
import { Controller, useFormContext } from 'react-hook-form';
import { DeliveryInput } from './delivery-forms/delivery-input';

export default function SecondBlock() {
  const { register, control } = useFormContext();
  return (
    <div className="mt-12 grid grid-cols-2 gap-8">
      <div className="space-y-0.5">
        <DeliveryInput
          placeholder="Delivery To:"
          inputClassName="font-medium"
          {...register('client.clientSectionLabel')}
        />
        <DeliveryInput
          placeholder="Name"
          className="!mb-4"
          inputClassName="text-2xl font-semibold"
          {...register('client.name')}
        />
        <DeliveryInput
          placeholder="Contact No"
          {...register('client.contact')}
        />
        <DeliveryInput
          placeholder="Email Address"
          {...register('client.email')}
        />
        <DeliveryInput placeholder="Address" {...register('client.address')} />
      </div>

      <div className="space-y-0.5 [&_input]:text-end">
        <DeliveryInput
          placeholder="Delivery No:"
          inputClassName="font-medium"
          {...register('delivery.DeliveryNumberLabel')}
        />
        <DeliveryInput
          placeholder="INV-0001-0001-0001"
          {...register('delivery.number')}
        />

        <DeliveryInput
          className="!mt-4"
          placeholder="Delivery Date"
          inputClassName="font-medium"
          {...register('delivery.DeliveryDateLabel')}
        />
        <Controller
          name="delivery.date"
          control={control}
          render={({ field: { value, onChange } }) => (
            <DatePicker
              selected={value}
              onChange={onChange}
              placeholderText="Date 17 Aug 2024"
              inputProps={{
                inputClassName:
                  'shadow-none ring-0 h-auto py-1 border-transparent hover:border-primary px-2 text-gray-900 dark:text-gray-0',
                prefixClassName: 'hidden',
              }}
            />
          )}
        />
      </div>
    </div>
  );
}
