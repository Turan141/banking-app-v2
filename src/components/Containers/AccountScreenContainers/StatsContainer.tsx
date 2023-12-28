import { Box } from "@mui/material";
import List from "../../List";
import { HorizontalButtonsRow } from "../../Buttons/HorizontalButtonsRow";
import { currencyButtonsRow } from "../../Buttons/ButtonLayouts/AccountScreenButtonRows";
import { useState, useCallback, useEffect } from "preact/hooks";
import {
  REQ_ACTIVE_ACCOUNT_STAT_DATA,
  S_ACCOUNT_STAT_TAB_CHANGED,
  S_ACCOUNT_STAT_READY,
} from "../../../managers/AccounHomeManager";

export const StatsContainer = () => {
  const [tabStats, setTabStats] = useState<IStatObject | null>(null);

  const updateCurrencies = useCallback(async () => {
    try {
      const newCurrencies = await REQ_ACTIVE_ACCOUNT_STAT_DATA.request();
      if (newCurrencies?.currencyStats) setTabStats(newCurrencies);
    } catch (error) {
      console.error("Error fetching currencies:", error);
    }
  }, []);

  useEffect(() => {
    S_ACCOUNT_STAT_READY.subscribe(updateCurrencies, "AccountsBalanceStat");
    S_ACCOUNT_STAT_TAB_CHANGED.subscribe(
      updateCurrencies,
      "AccountsBalanceStat"
    );
    return () => {
      S_ACCOUNT_STAT_TAB_CHANGED.unsubscribe("AccountsBalanceStat");
      S_ACCOUNT_STAT_READY.unsubscribe("AccountsBalanceStat");
    };
  }, [updateCurrencies]);

  return (
    <Box>
      <HorizontalButtonsRow buttons={currencyButtonsRow} />
      <List
        type="accountStat"
        items={tabStats?.currencyStats as IAccountVO[]}
      />
    </Box>
  );
};
