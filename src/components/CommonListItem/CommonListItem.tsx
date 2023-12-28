import { Box, Typography } from "@mui/material";
import { CustomAvatar } from "../Avatars/CustomAvatar";
import { Dukascoin } from "../../assets/icons/Dukascoin";
import { TransactionIn } from "../../assets/icons/TransactionIn";
import { TransactionOut } from "../../assets/icons/TransactionOut";
import { BalanceSection } from "./Sections/BalanceSection";
import { TransactionSection } from "./Sections/TransactionSection";
import { currencySymbols } from "../../helpers/CurrencySymbols";

interface ListItemProps<T> {
  value: T;
  type: "accountStat" | "dukascoins" | "transaction";
  avatar?: React.ReactNode;
}

export const CommonListItem = <T,>({ value, type }: ListItemProps<T>) => {
  const getItemTitle = () => {
    switch (type) {
      case "accountStat":
        return (value as IAccountVO).CURRENCY + " Account";
      case "dukascoins":
        return "Dukascoins Balance";
      case "transaction":
        return (value as ITransactionVO).TITLE || "";
      default:
        return "";
    }
  };

  const getItemSymbol = () => {
    switch (type) {
      case "accountStat":
        return currencySymbols?.[(value as IAccountVO).CURRENCY] || "--";
      case "dukascoins":
        return "DUK+";
      default:
        return "";
    }
  };

  const getAvatar = () => {
    switch (type) {
      case "accountStat":
        return (
          <CustomAvatar
            alt="avatar"
            size={32}
            src={`https://wise.com/public-resources/assets/flags/rectangle/${(
              value as IAccountVO
            )?.CURRENCY?.toLowerCase()}.png`}
          />
        );
      case "dukascoins":
        return <CustomAvatar svg={<Dukascoin />} alt="avatar" size={32} />;
      case "transaction":
        return (value as ITransactionVO).TITLE === "Incoming Transfer" ? (
          <TransactionIn />
        ) : (
          <TransactionOut />
        );
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        flexDirection: "row",
        alignItems: "center",
        display: "flex",
        gap: "16px",

      }}
    >
      <Box>{getAvatar()}</Box>
      <Box
        sx={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          height: "100%",
          display: "flex",
          gap: "16px",
          pt: 1.5,
          pb: 1.5,
        }}
      >
        <Box>
          <Typography
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxLines: 2,
              color: "contentPrimary.main",
              lineHeight: "20px",
              fontWeight: "var(--fontRegular400)",
            }}
          >
            {getItemTitle()}
          </Typography>
          {type === "transaction" && (
            <Typography
              sx={{ fontSize: "12px", color: "contentQuaternary.main" }}
            >
              •••• {(value as ITransactionVO).DESCRIPTION}
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            alignItems: "flex-end",
            marginLeft: "auto",
            flexDirection: "column",
          }}
        >
          {type === "transaction" ? (
            <TransactionSection
              value={value as ITransactionVO}
              getItemSymbol={getItemSymbol}
            />
          ) : (
            <BalanceSection
              value={value as IAccountVO}
              getItemSymbol={getItemSymbol}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};
