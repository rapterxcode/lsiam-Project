import { routes } from '@/config/routes';
import { DUMMY_ID } from '@/config/constants';
import { IconType } from 'react-icons/lib';
import {
  PiAirplaneTiltDuotone,
  PiAppStoreLogoDuotone,
  PiBellSimpleRingingDuotone,
  PiBinocularsDuotone,
  PiBriefcaseDuotone,
  PiBrowserDuotone,
  PiCalendarDuotone,
  PiCalendarPlusDuotone,
  PiCardsDuotone,
  PiCaretCircleUpDownDuotone,
  PiChartBarDuotone,
  PiChartLineUpDuotone,
  PiChatCenteredDotsDuotone,
  PiCreditCardDuotone,
  PiCurrencyCircleDollarDuotone,
  PiCurrencyDollarDuotone,
  PiEnvelopeSimpleOpenDuotone,
  PiFeatherDuotone,
  PiFileImageDuotone,
  PiFolderLockDuotone,
  PiFolder,
  PiGridFourDuotone,
  PiHammerDuotone,
  PiHeadsetDuotone,
  PiHourglassSimpleDuotone,
  PiHouseLineDuotone,
  PiListNumbersDuotone,
  PiLockKeyDuotone,
  PiMagicWandDuotone,
  PiMapPinLineDuotone,
  PiNoteBlankDuotone,
  PiNotePencilDuotone,
  PiPackageDuotone,
  PiPokerChipDuotone,
  PiRocketLaunchDuotone,
  PiShieldCheckeredDuotone,
  PiShootingStarDuotone,
  PiShoppingCartDuotone,
  PiSquaresFourDuotone,
  PiStepsDuotone,
  PiTableDuotone,
  PiUserCircleDuotone,
  PiUserGearDuotone,
  PiUserPlusDuotone,
  PiShapesDuotone,
  PiNewspaperClippingDuotone,
  PiCodesandboxLogoDuotone,
  PiSparkleDuotone,
} from 'react-icons/pi';
import { atom } from 'jotai';
import ProjectWriteIcon from '@components/icons/project-write';

export interface SubMenuItemType {
  name: string;
  description?: string;
  href: string;
  badge?: string;
}

export interface ItemType {
  name: string;
  icon: IconType;
  href?: string;
  description?: string;
  badge?: string;
  subMenuItems?: SubMenuItemType[];
}

export interface MenuItemsType {
  id: string;
  name: string;
  title: string;
  icon: IconType;
  menuItems: ItemType[];
}

export const carbonMenuItems: MenuItemsType[] = [
  {
    id: '1',
    name: 'Dashboard',
    title: 'Overview',
    icon: PiBrowserDuotone,
    menuItems: [
      {
        name: 'File Manager',
        href: '/',
        icon: PiFolder,
      },
      {
        name: 'Appointment',
        href: routes.appointment.dashboard,
        icon: PiCalendarDuotone,
      },
      {
        name: 'Executive',
        href: routes.executive.dashboard,
        icon: PiBriefcaseDuotone,
      },
      {
        name: 'Project',
        href: routes.project.dashboard,
        icon: ProjectWriteIcon,
      },
      {
        name: 'Social Media',
        href: routes.socialMedia.dashboard,
        icon: PiSparkleDuotone,
        badge: 'NEW',
      },
      {
        name: 'Job Board',
        href: routes.jobBoard.dashboard,
        icon: PiShapesDuotone,
      },
      {
        name: 'Financial',
        href: routes.financial.dashboard,
        icon: PiCurrencyCircleDollarDuotone,
      },
      {
        name: 'Logistics',
        href: routes.logistics.dashboard,
        icon: PiPackageDuotone,
      },
      {
        name: 'E-Commerce',
        href: routes.eCommerce.dashboard,
        icon: PiShoppingCartDuotone,
      },
      {
        name: 'Analytics',
        href: routes.analytics,
        icon: PiChartBarDuotone,
      },
      {
        name: 'Support',
        href: routes.support.dashboard,
        icon: PiHeadsetDuotone,
      },
    ],
  },
  {
    id: '2',
    name: 'Apps Kit',
    title: 'Apps Kit',
    icon: PiAppStoreLogoDuotone,
    menuItems: [
      {
        name: 'E-Commerce',
        description: '"Shop Smart, Click Quick: Your One-Stop Solution!"',
        href: '#',
        icon: PiShoppingCartDuotone,
        subMenuItems: [
          {
            name: 'Products',
            href: routes.eCommerce.products,
            badge: '',
          },
          {
            name: 'Product Details',
            href: routes.eCommerce.productDetails(DUMMY_ID),
            badge: '',
          },
          {
            name: 'Create Product',
            href: routes.eCommerce.createProduct,
          },
          {
            name: 'Edit Product',
            href: routes.eCommerce.ediProduct(DUMMY_ID),
          },
          {
            name: 'Categories',
            href: routes.eCommerce.categories,
          },
          {
            name: 'Create Category',
            href: routes.eCommerce.createCategory,
          },
          {
            name: 'Edit Category',
            href: routes.eCommerce.editCategory(DUMMY_ID),
          },
          {
            name: 'Orders',
            href: routes.eCommerce.orders,
          },
          {
            name: 'Order Details',
            href: routes.eCommerce.orderDetails(DUMMY_ID),
          },
          {
            name: 'Create Order',
            href: routes.eCommerce.createOrder,
          },
          {
            name: 'Edit Order',
            href: routes.eCommerce.editOrder(DUMMY_ID),
          },
          {
            name: 'Reviews',
            href: routes.eCommerce.reviews,
          },
          {
            name: 'Shop',
            href: routes.eCommerce.shop,
          },
          {
            name: 'Cart',
            href: routes.eCommerce.cart,
          },
          {
            name: 'Checkout & Payment',
            href: routes.eCommerce.checkout,
          },
        ],
      },
      {
        name: 'Support',
        description: '"Effortless Assistance at your Fingertips!"',
        href: '#',
        icon: PiHeadsetDuotone,
        subMenuItems: [
          {
            name: 'Inbox',
            href: routes.support.inbox,
          },
          {
            name: 'Snippets',
            href: routes.support.snippets,
          },
          {
            name: 'Templates',
            href: routes.support.templates,
          },
        ],
      },
      {
        name: 'Invoice',
        description: 'Professional-looking invoices for each customer order',
        href: '#',
        icon: PiCurrencyDollarDuotone,
        subMenuItems: [
          {
            name: 'List',
            href: routes.invoice.home,
          },
          {
            name: 'Details',
            href: routes.invoice.details(DUMMY_ID),
          },
          {
            name: 'Create',
            href: routes.invoice.create,
          },
          {
            name: 'Edit',
            href: routes.invoice.edit(DUMMY_ID),
          },
        ],
      },
      {
        name: 'Logistics',
        description:
          '"Streamline Shipments: Discover Efficiency with our Logistics!"',
        href: '#',
        icon: PiPackageDuotone,
        subMenuItems: [
          {
            name: 'Shipment List',
            href: routes.logistics.shipmentList,
          },
          {
            name: 'Shipment Details',
            href: routes.logistics.shipmentDetails(DUMMY_ID),
          },
          {
            name: 'Create Shipment',
            href: routes.logistics.createShipment,
          },
          {
            name: 'Edit Shipment',
            href: routes.logistics.editShipment(DUMMY_ID),
          },
          {
            name: 'Customer Profile',
            href: routes.logistics.customerProfile,
          },
          {
            name: 'Tracking',
            href: routes.logistics.tracking(DUMMY_ID),
          },
        ],
      },
      {
        name: 'Job Feeds',
        href: routes.jobBoard.jobFeed,
        icon: PiShapesDuotone,
      },
      {
        name: 'Appointment',
        href: routes.appointment.appointmentList,
        icon: PiCalendarDuotone,
      },
      {
        name: 'File Manager',
        description:
          '"Organize, Access, and Share: Simplify your Digital World with us!"',
        href: routes.file.manager,
        icon: PiFileImageDuotone,
      },
      {
        name: 'Event Calendar',
        href: routes.eventCalendar,
        icon: PiCalendarPlusDuotone,
      },
      {
        name: 'Roles & Permissions',
        href: routes.rolesPermissions,
        icon: PiFolderLockDuotone,
      },
      {
        name: 'Point of Sell',
        href: routes.pos.index,
        icon: PiCreditCardDuotone,
      },
      {
        name: 'Invoice Builder',
        href: routes.invoice.builder,
        icon: PiNewspaperClippingDuotone,
      },
      {
        name: 'Image Viewer',
        href: routes.imageViewer,
        icon: PiCodesandboxLogoDuotone,
        badge: 'NEW',
      },
    ],
  },

];

export const carbonMenuItemAtom = atom(carbonMenuItems[0]);
