declare interface ITransactionVO {
  TITLE: string;
  DESCRIPTION: string;
  STATUS: string;
  AMOUNT: string;
}

declare interface IDukasCoinBalanceVO {
  ACCOUNT_NUMBER: string;
  BALANCE: string;
  COIN: string;
  CONSOLIDATE_CURRENCY: string;
  CONSOLIDATE_BALANCE: string;
}

declare interface ICardDetails {
  id: string;
  number: string | null;
  name_on_card: string | null;
  code: string | null;
  masked: string;
  type: string;
  status: string;
  status_name: string;
  currency: string;
  balance: number | null;
  available: number | null;
  valid: string | null;
  image: string;
  card_product_code: string;
  product_name: string;
  actions: string[];
  programme: string;
  psystem: string;
  can_be_activated: number;
  can_be_unblocked: number;
  can_be_blocked: number;
  can_be_unloaded: number;
  can_be_reloaded: number;
}

interface IStatData {
  CONSOLIDATE_CURRENCY: string;
  // Add other properties as needed
}

declare interface IStatObject {
  title: string;
  totalConsolidateAmount: number;
  consolidateCurrency: string;
  currencyStats: StatData[];
  type: string;
}

declare interface IAccountHome {
  account: {
    CUSTOMER_NUMBER: string;
    ETH_ADDRESS: string;
    BTC_ADDRESS: string;
    TITLE: string;
    FIRST_NAME: string;
    LAST_NAME: string;
    EMAIL: string;
    PHONE: string;
    ADDRESS: string;
    CITY: string;
    COUNTRY: string;
    ZIP: string;
    BIRTH_DATE: string;
    BIRTH_PLACE: string;
    NATIONALITY: string;
    CARD_DELIVERY_ZIP: string;
    CARD_DELIVERY_COUNTRY: string;
    CARD_DELIVERY_CITY: string;
    CARD_DELIVERY_ADDRESS: string;
    ETH_WALLET_EXPIRED_DATE: number;
    BTC_WALLET_EXPIRED_DATE: number;
    DELIVERY_FULL_NAME: string;
    accounts: IAccountVO[];
    limits: string[][];
    pointers: IPointer[];
    settings: {
      LANGUAGE: string;
      CONSOLIDATE_CURRENCY: string;
      INVESTMENT_REFERENCE_CURRENCY: string;
      PWP_ENABLED: number | null;
      PWP_LIMIT_AMOUNT: number | null;
      PWP_LIMIT_DAILY: number | null;
      DISABLE_COIN_ORDER_PUSH: number | null;
      ENABLE_COIN_STAT_PUSH: number | null;
      INVESTMENT_ACCOUNT: string;
      COIN_FIAT_ACCOUNT: string;
    };
    notifications: INotification;
    "update-personal-info": boolean;
    limits_increase_request: boolean;
    flags: IFlag;
    is_merchant: boolean;
    read_only: boolean;
  };
  news: any[]; // Define the actual structure when available
  "pending-transfers": {
    data: any[]; // Define the actual structure when available
    page_count: number;
  };
  investments: IAccountVO[];
  coins: IAccountVO[];
  "partners-links": {
    PARTNER_ID: string;
    PARTNER_NAME: string;
    PARTNER_ACCOUNTS: IAccountVO[];
  }[];
  "other-accounts": IAccountVO[];
  savings: IAccountVO[];
}

interface IAccountVO {
  ACCOUNT_NUMBER: string;
  BALANCE: string;
  CURRENCY: string;
  DESCRIPTION: string | null;
  IBAN: string;
  CONSOLIDATE_CURRENCY: string;
  CONSOLIDATE_BALANCE: string;
}
interface IFlags {
  apple_pay_enabled: number;
  card_issue_enabled: number;
}

interface INotification {
  [key: string]: number;
}

interface INotifications {
  [key: string]: number;
}

interface ISettings {
  COIN_FIAT_ACCOUNT: string;
  CONSOLIDATE_CURRENCY: string;
}

interface IPointer {
  POINTER: string;
  POINTER_TYPE: string;
}

