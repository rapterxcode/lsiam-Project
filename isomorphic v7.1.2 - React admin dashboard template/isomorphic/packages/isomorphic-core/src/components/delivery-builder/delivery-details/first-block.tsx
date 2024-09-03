'use client';

import { useFormContext } from 'react-hook-form';
import { DeliveryInput } from './delivery-forms/delivery-input';
import DeliveryImageUploader from '../../../ui/file-upload/delivery-image-uploader';

export default function FirstBlock({ setValue }: { setValue: any }) {
  const { register } = useFormContext();

  return (
    <div className="grid grid-cols-2 items-center">
      <DeliveryImageUploader name="logo" setValue={setValue} />
      <div className="space-y-1">
        <DeliveryInput
          className="ms-auto max-w-xs"
          {...register('company.name')}
          placeholder="Your Company Name"
          inputClassName="[&_input]:text-end text-lg font-medium"
        />
        <DeliveryInput
          placeholder="Delivery"
          className="ms-auto max-w-xs"
          {...register('documentTitle')}
          inputClassName="text-4xl [&_input]:text-end font-semibold"
        />
      </div>
    </div>
  );
}
