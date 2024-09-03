import { routes } from '@/config/routes';
import { DUMMY_ID } from '@/config/constants';
import {
  PiCurrencyCircleDollarFill,
  PiShoppingCart,
  PiHeadset,
  PiPackage,
  PiChartBar,
  PiCurrencyDollar,
  PiSquaresFour,
  PiGridFour,
  PiFeather,
  PiChartLineUp,
  PiMapPinLine,
  PiUserGear,
  PiBellSimpleRinging,
  PiUser,
  PiEnvelopeSimpleOpen,
  PiSteps,
  PiCreditCard,
  PiTable,
  PiBrowser,
  PiHourglassSimple,
  PiUserCircle,
  PiShootingStar,
  PiRocketLaunch,
  PiFolderLock,
  PiBinoculars,
  PiHammer,
  PiNoteBlank,
  PiUserPlus,
  PiShieldCheck,
  PiLockKey,
  PiChatCenteredDots,
  PiCalendarPlus,
  PiHouseLine,
  PiAirplaneTilt,
  PiPokerChip,
  PiFolder,
  PiListNumbers,
  PiCaretCircleUpDown,
  PiBriefcase,
  PiCalendarDuotone,
  PiShapes,
  PiNewspaperClippingDuotone,PiCurrencyCircleDollarDuotone,PiPackageDuotone,PiCurrencyDollarDuotone,
  PiTableDuotone,
  PiShapesDuotone,
  PiCodesandboxLogoDuotone,
  PiSparkleDuotone,
} from 'react-icons/pi';
import ProjectWriteIcon from '@components/icons/project-write';

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  // label start
  {
    name: 'Overview',
  },
  // label end
  {
    name: 'Quotation',
    href: routes.project.dashboard,
    icon: <ProjectWriteIcon />,
  },
  {
    name: 'Delivery',
    href: routes.jobBoard.dashboard,
    icon: <PiShapesDuotone />,
  },
  {
    name: 'Invoice',
    href: routes.financial.dashboard,
    icon: <PiCurrencyCircleDollarDuotone />,
  },


  // label start
  {
    name: 'Apps Kit',
  },
  // label end
  {
    name: 'Quotation',
    href: '#',
    icon: <ProjectWriteIcon />,
    dropdownItems: [
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
    name: 'Delivery',
    href: '#',
    icon: <PiPackageDuotone />,
    dropdownItems: [
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
    name: 'Invoice',
    href: '#',
    icon: <PiCurrencyDollarDuotone />,
    dropdownItems: [
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
      {
        name: 'Invoice Builder',
        href: routes.invoice.builder,
        icon: <PiNewspaperClippingDuotone />,
      },
    ],
  },
];
