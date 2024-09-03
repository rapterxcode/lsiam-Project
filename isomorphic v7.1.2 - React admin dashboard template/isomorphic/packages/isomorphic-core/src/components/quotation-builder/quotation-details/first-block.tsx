'use client';

import { useFormContext } from 'react-hook-form';
import { QuotationInput } from './quotation-forms/quotation-input';
import QuotationImageUploader from '../../../ui/file-upload/quotation-image-uploader';

export default function FirstBlock({ setValue }: { setValue: any }) {
  const { register } = useFormContext();

  return (
    <div className="grid grid-cols-2 items-center">
      <QuotationImageUploader name="logo" setValue={setValue} />
      <div className="space-y-1">
        <QuotationInput
          className="ms-auto max-w-xs"
          {...register('company.name')}
          placeholder="Your Company Name"
          inputClassName="[&_input]:text-end text-lg font-medium"
        />
        <QuotationInput
          placeholder="Quotation"
          className="ms-auto max-w-xs"
          {...register('documentTitle')}
          inputClassName="text-4xl [&_input]:text-end font-semibold"
        />
      </div>
    </div>
  );
}
