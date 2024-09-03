'use client';

import { DatePicker } from '../../../ui/datepicker';
import { Controller, useFormContext } from 'react-hook-form';
import { QuotationInput } from './quotation-forms/quotation-input';

export default function SecondBlock() {
  const { register, control } = useFormContext();
  return (
    <div className="mt-12 grid grid-cols-2 gap-8">
      <div className="space-y-0.5">
        <QuotationInput
          placeholder="Quotation To:"
          inputClassName="font-medium"
          {...register('client.clientSectionLabel')}
        />
        <QuotationInput
          placeholder="Name"
          className="!mb-4"
          inputClassName="text-2xl font-semibold"
          {...register('client.name')}
        />
        <QuotationInput
          placeholder="Contact No"
          {...register('client.contact')}
        />
        <QuotationInput
          placeholder="Email Address"
          {...register('client.email')}
        />
        <QuotationInput placeholder="Address" {...register('client.address')} />
      </div>

      <div className="space-y-0.5 [&_input]:text-end">
        <QuotationInput
          placeholder="quotation No:"
          inputClassName="font-medium"
          {...register('quotation.QuotationNumberLabel')}
        />
        <QuotationInput
          placeholder="INV-0001-0001-0001"
          {...register('quotation.number')}
        />

        <QuotationInput
          className="!mt-4"
          placeholder="quotation Date"
          inputClassName="font-medium"
          {...register('quotation.QuotationDateLabel')}
        />
        <Controller
          name="quotation.date"
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
