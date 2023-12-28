import Signal, { Req } from "badmfck-signal";
import { AccountHomeMockedData } from "../mockup/AccountHomeMock";
import { PaymentSettingsMock } from "../mockup/PaymentSettingsMock";
import { translationsMock } from "../mockup/TranslationsMock";
import { currenciesWithCountryCode } from "../helpers/CurrenciesWithCountryCode";
import { currencySymbols } from "../helpers/CurrencySymbols";
import { getTotalAmount } from "../helpers/GetTotalConsolidateAmount";

export interface IStatsTabs {
  [StatsToRender.ACCOUNT]: "account";
  [StatsToRender.OTHER_ACCOUNTS]: "other-accounts";
  [StatsToRender.PARTNER_LINKS]: "partner-links";
  [StatsToRender.SAVINGS]: "savings";
}

export enum StatsToRender {
  ACCOUNT = "account",
  OTHER_ACCOUNTS = "other-accounts",
  PARTNER_LINKS = "partners-links",
  SAVINGS = "savings",
}

// Siqnal's
export const S_ACCOUNT_STAT_READY = new Signal<void>();
export const S_ACCOUNT_STAT_TAB_CHANGED = new Signal<{ tab: string }>(
  "S_ACCOUNT_STAT_TAB_CHANGED"
);

// Req's
export const REQ_ACTIVE_ACCOUNT_STAT_DATA: Req<void, IStatObject> = new Req();
export const REQ_PAYMENT_SETTINGS_MOCK: Req<void, any> = new Req();
export const REQ_TRANSLATIONS: Req<void, any> = new Req();
export const REQ_CURRENCIES_WITH_COUNTRY_CODE: Req<void, any> = new Req();
export const REQ_CURRENCY_SYMBOLS: Req<void, any> = new Req();
export const REQ_ACCOUNT_STATS: Req<void, any> = new Req();
export const REQ_ACCOUNT_GET_HOME: Req<() => void, IAccountHome> = new Req<
  () => void,
  IAccountHome
>();

class AccountHomeManager {
  private currentAccountStatTab: string = StatsToRender.ACCOUNT;
  private accountStatData: IStatObject[] = [];

  constructor() {}

  async init() {
    // Req's
    REQ_ACTIVE_ACCOUNT_STAT_DATA.listener = async () =>
      await this.getCurrentActiveStatData();
    REQ_ACCOUNT_GET_HOME.listener = async () => await this.getAccountHome();
    REQ_TRANSLATIONS.listener = async () => await this.getTranslations();
    REQ_CURRENCY_SYMBOLS.listener = async () => await this.getCurrencySymbols();
    REQ_ACCOUNT_STATS.listener = async () => await this.getAccountStats();
    REQ_CURRENCIES_WITH_COUNTRY_CODE.listener = async () =>
      await this.getCurrenciesWithCountryCode();
    REQ_PAYMENT_SETTINGS_MOCK.listener = async () =>
      await this.getPaymentSettings();

    // Siqnal's
    S_ACCOUNT_STAT_TAB_CHANGED.subscribe(({ tab }) =>
      this.onAccountStatTabChanged(tab)
    );
  }

  onAccountStatTabChanged(tab: string) {
    this.currentAccountStatTab = tab;
    // Additional logic or actions can be performed here
  }

  async getCurrentActiveStatData(): Promise<any> {
    return (
      this.accountStatData.find(
        (stat) => stat.type === this.currentAccountStatTab
      ) || []
    );
  }

  async getAccountStats(): Promise<any> {
    const resp: IAccountHome = await this.getAccountHome();

    const {
      [StatsToRender.ACCOUNT]: account,
      [StatsToRender.OTHER_ACCOUNTS]: otherAccounts,
      [StatsToRender.PARTNER_LINKS]: partnerLinks,
      [StatsToRender.SAVINGS]: savings,
    } = resp;

    // Prepare data from db for rendering
    const statObject: IStatObject[] = [
      {
        title: "Currency Accounts",
        totalConsolidateAmount: getTotalAmount(account?.accounts || []),
        consolidateCurrency: account?.accounts?.[0]?.CONSOLIDATE_CURRENCY ?? "",
        currencyStats: account?.accounts || [],
        type: "account",
      },
      {
        title: "Trading Accounts",
        totalConsolidateAmount: getTotalAmount(otherAccounts || []),
        consolidateCurrency: otherAccounts?.[0]?.CONSOLIDATE_CURRENCY ?? "",
        currencyStats: otherAccounts || [],
        type: "other-accounts",
      },
      {
        title: "Partners Links",
        type: "partners-links",
        totalConsolidateAmount: getTotalAmount(partnerLinks || []),
        consolidateCurrency:
          partnerLinks?.[0].PARTNER_ACCOUNTS[0].CONSOLIDATE_CURRENCY ?? "",
        currencyStats:
          partnerLinks.reduce(
            (accumulator, currentValue) =>
              accumulator.concat(currentValue.PARTNER_ACCOUNTS as unknown as any),
            []
          ) || [],
      },
      {
        title: "Savings",
        type: "savings",
        totalConsolidateAmount: getTotalAmount(savings || []),
        consolidateCurrency: savings?.[0]?.CONSOLIDATE_CURRENCY ?? "",
        currencyStats: savings || [],
      },
    ];

    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          this.accountStatData = statObject;
          S_ACCOUNT_STAT_READY.invoke();
          resolve(statObject);
        }, 1000);
      } catch (error) {
        reject(error);
      }
    });
  }

  async getCurrencySymbols(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        resolve(currencySymbols);
      } catch (error) {
        reject(error);
      }
    });
  }

  async getCurrenciesWithCountryCode(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(currenciesWithCountryCode);
        }, 1000);
      } catch (error) {
        reject(error);
      }
    });
  }

  async getTranslations(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(translationsMock);
        }, 1000);
      } catch (error) {
        reject(error);
      }
    });
  }

  async getPaymentSettings(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        const parsedData = JSON.parse(PaymentSettingsMock);
        setTimeout(() => {
          resolve(parsedData);
        }, 1000);
      } catch (error) {
        reject(error);
      }
    });
  }

  async getAccountHome(): Promise<IAccountHome> {
    console.log("GET HOME");
    return new Promise((resolve, reject) => {
      try {
        const parsedData = AccountHomeMockedData; // fetch from db
        setTimeout(() => resolve(parsedData as any), 200);
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default AccountHomeManager;
