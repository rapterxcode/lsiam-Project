import { useFormContext } from 'react-hook-form';
import { DeliveryInput } from './delivery-forms/delivery-input';
import { DeliveryTextarea } from './delivery-forms/delivery-textarea';

export default function OthersBlock() {
  const { register } = useFormContext();
  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 gap-0.5">
        <DeliveryInput
          placeholder="Note"
          className="font-semibold"
          {...register('note.noteLabel')}
        />
        <DeliveryTextarea
          rows={4}
          variant="outline"
          placeholder="Some info about the note..."
          {...register(`note.note`)}
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-0.5">
        <DeliveryInput
          placeholder="Note"
          className="font-semibold"
          {...register('terms.termsLabel')}
        />
        <DeliveryTextarea
          rows={4}
          variant="outline"
          placeholder="Some info about the note..."
          {...register(`terms.terms`)}
        />
      </div>
      <div className="ms-auto mt-12 grid w-full max-w-64 grid-cols-1 gap-1 [&_input]:text-center">
        <DeliveryInput
          placeholder="Name"
          inputClassName="text-lg"
          className="font-semibold"
          {...register('signature.name')}
        />
        <DeliveryInput
          placeholder="Label"
          className="border-t pt-1 dark:border-muted/20"
          {...register('signature.label')}
        />
      </div>

      <div className="mt-6 border-t border-muted pt-4 text-center text-gray-900 dark:border-muted/20 dark:text-gray-0">
        Powered By <span className="font-bold">Le Siam</span>
      </div>
    </div>
  );
}
