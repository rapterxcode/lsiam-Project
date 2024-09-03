import { routes } from "@/config/routes";
import { DUMMY_ID } from "@/config/constants";
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
} from "react-icons/pi";

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  // label start
  {
    name: "Overview",
  },

  {
    name: "Support",
    href: "#",
    icon: <PiHeadsetDuotone />,
    dropdownItems: [
      {
        name: "Inbox",
        href: routes.support.inbox,
      },
      {
        name: "Snippets",
        href: routes.support.snippets,
      },
      {
        name: "Templates",
        href: routes.support.templates,
      },
    ],
  },
  {
    name: "Invoice",
    href: "#",
    icon: <PiCurrencyDollarDuotone />,
    dropdownItems: [
      {
        name: "List",
        href: routes.invoice.home,
      },
      {
        name: "Details",
        href: routes.invoice.details(DUMMY_ID),
      },
      {
        name: "Create",
        href: routes.invoice.create,
      },
      {
        name: "Edit",
        href: routes.invoice.edit(DUMMY_ID),
      },
    ],
  },
  {
    name: "Invoice Builder",
    href: routes.invoice.builder,
    icon: <PiNewspaperClippingDuotone />,
  },
  
];
