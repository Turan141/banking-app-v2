import { useEffect, useState, useCallback } from "preact/hooks";
import { VerticalIndicator } from "./VerticalBar";
import { Box } from "@mui/material";
import {
  REQ_ACTIVE_ACCOUNT_STAT_DATA,
  S_ACCOUNT_STAT_READY,
  S_ACCOUNT_STAT_TAB_CHANGED,
} from "../../managers/AccounHomeManager";
import { getMaxValue } from "../../helpers/GetMaxValue";

const HEIGHT = "100px";

export const AccountsBalanceStat = () => {
  const [tabStats, setTabStats] = useState<IStatObject | null>(null);
  const [maxValue, setMaxValue] = useState<number>(0);

  const updateCurrencies = useCallback(async () => {
    try {
      const newCurrencies = await REQ_ACTIVE_ACCOUNT_STAT_DATA.request();

      if (!newCurrencies?.currencyStats) return;

      const maxValue = getMaxValue(newCurrencies.currencyStats);
      if (maxValue) setMaxValue(maxValue > 0 ? maxValue : 1);

      setTabStats(newCurrencies);
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

  if(!tabStats?.currencyStats.length) return null;

  return (
    <Box
      sx={{
        display: "flex",
        height: HEIGHT,
        overflow: "auto",
        position: "relative",
        pl: 2,
        pr: 2,
        "& > div": {
          flex: 1,
          display: "flex",
          height: "100%",
          justifyContent: "space-evenly",
          gap: "8px",
        },
      }}
    >
      <Box>
        {tabStats?.currencyStats?.map((c: IAccountVO, index: number) => (
          <Box key={index}>
            <VerticalIndicator
              height={(+c?.CONSOLIDATE_BALANCE / maxValue) * 100}
              label={c?.CONSOLIDATE_CURRENCY}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
