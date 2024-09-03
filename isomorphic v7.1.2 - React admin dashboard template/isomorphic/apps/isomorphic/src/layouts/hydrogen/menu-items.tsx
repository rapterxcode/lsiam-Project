import { routes } from '@/config/routes';
import { DUMMY_ID } from '@/config/constants';
import {
  PiShoppingCartDuotone,
  PiHeadsetDuotone,
  PiPackageDuotone,
  PiChartBarDuotone,
  PiCurrencyDollarDuotone,
  PiSquaresFourDuotone,
  PiGridFourDuotone,
  PiFeatherDuotone,
  PiChartLineUpDuotone,
  PiMapPinLineDuotone,
  PiUserGearDuotone,
  PiBellSimpleRingingDuotone,
  PiUserDuotone,
  PiEnvelopeSimpleOpenDuotone,
  PiStepsDuotone,
  PiCreditCardDuotone,
  PiTableDuotone,
  PiBrowserDuotone,
  PiHourglassSimpleDuotone,
  PiUserCircleDuotone,
  PiShootingStarDuotone,
  PiRocketLaunchDuotone,
  PiFolderLockDuotone,
  PiBinocularsDuotone,
  PiHammerDuotone,
  PiNoteBlankDuotone,
  PiUserPlusDuotone,
  PiShieldCheckDuotone,
  PiLockKeyDuotone,
  PiChatCenteredDotsDuotone,
  PiCalendarPlusDuotone,
  PiEnvelopeDuotone,
  PiCurrencyCircleDollarDuotone,
  PiBriefcaseDuotone,
  PiHouseLineDuotone,
  PiAirplaneTiltDuotone,
  PiFolder,
  PiCaretCircleUpDownDuotone,
  PiListNumbersDuotone,
  PiCoinDuotone,
  PiCalendarDuotone,
  PiShapesDuotone,
  PiNewspaperClippingDuotone,
  PiCodesandboxLogoDuotone,
  PiSparkleDuotone,
} from 'react-icons/pi';
import ProjectWriteIcon from '@components/icons/project-write';

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  // label start


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
        name: 'Quotation Builder',
        href: routes.quotation.builder,
        icon: <PiNewspaperClippingDuotone />,
      },
    ],
  },
 
  {
    name: 'Delivery',
    href: '#',
    icon: <PiPackageDuotone />,
    dropdownItems: [
      {
        name: 'Delivery Builder',
        href: routes.delivery.builder,
        icon: <PiNewspaperClippingDuotone />,
      },
    ],
  },
  {
    name: 'Invoice',
    href: '#',
    icon: <PiCurrencyDollarDuotone />,
    dropdownItems: [
      {
        name: 'Invoice Builder',
        href: routes.invoice.builder,
        icon: <PiNewspaperClippingDuotone />,
      },
    ],
  },
];
