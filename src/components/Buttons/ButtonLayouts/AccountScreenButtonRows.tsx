import { S_PRESENT_SCREEN_ON_MAIN, Screens } from "../../../Presenter";
import { Deposit } from "../../../assets/icons/Deposit";
import { Exchange } from "../../../assets/icons/Exchange";
import { Market } from "../../../assets/icons/Market";
import { Request } from "../../../assets/icons/Request";
import { Send } from "../../../assets/icons/Send";
import { Staking } from "../../../assets/icons/Staking";
import { S_AUTH_STATUS_DEBUG, AuthStatus } from "../../../managers/AuthManager";

export const dukascoinButtonsRow = [
  {
    onClick: () => {},
    icon: <Deposit />,
    title: "Deposit",
  },
  {
    onClick: () => {},
    icon: <Staking />,
    title: "Staking",
  },
  {
    onClick: () => {},
    icon: <Send />,
    title: "Send",
  },
  {
    onClick: () => {},
    icon: <Market />,
    title: "Market",
  },
];

export const currencyButtonsRow = [
  {
    onClick: () => {
      S_PRESENT_SCREEN_ON_MAIN.invoke({
        screen: Screens.DEPOSIT_SCREEN,
        animationDirection: "right",
      });
    },
    icon: <Deposit />,
    title: "Deposit",
  },
  {
    onClick: () => {
      S_PRESENT_SCREEN_ON_MAIN.invoke({
        screen: Screens.ACCOUNT_HOME,
        animationDirection: "right",
      });
    },
    icon: <Exchange />,
    title: "Exchange",
  },
  {
    onClick: () => {
      S_PRESENT_SCREEN_ON_MAIN.invoke({
        screen: Screens.REQUEST_MONEY_SCREEN,
        animationDirection: "right",
      });
    },
    icon: <Request />,
    title: "Request",
  },
  {
    onClick: () => {
      S_AUTH_STATUS_DEBUG.invoke(AuthStatus.UNAUTHORIZED);
    },
    icon: <Send />,
    title: "Send",
  },
];
