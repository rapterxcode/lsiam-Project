import { routes } from '@/config/routes';
import { DUMMY_ID } from '@/config/constants';

// Note: do not add href in the label object, it is rendering as label
export const pageLinks = [
  // label start
  // label start
  {
    name: 'Apps',
  },
  // label end
  {
    name: 'Quotation',
    href: routes.quotation.builder,
  },
  {
    name: 'Delivery',
    href: routes.delivery.builder,
  },
  {
    name: 'Invoice',
    href: routes.invoice.builder,
  },
];
