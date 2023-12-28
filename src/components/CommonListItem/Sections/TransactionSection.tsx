import { Box, Typography } from "@mui/material";

export const TransactionSection = ({
  value,
  //@ts-ignore
  getItemSymbol,
}: {
  value: ITransactionVO;
  getItemSymbol: () => string;
}) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "flex-end",
      marginLeft: "auto",
      flexDirection: "column",
    }}
  >
    <Box
      display="flex"
      alignItems="baseline"
      sx={{
        fontSize: "16px",
        fontWeight: "var(--fontSemiBold600)",
        whiteSpace: "nowrap",
        color: value.TITLE === "Incoming Transfer" ? "colorAccentGreen.main" : "initial",
      }}
    >
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "var(--fontSemiBold600)",
        }}
      >
        {value.AMOUNT.split(".")[0]}
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "var(--fontSemiBold600)",
        }}
      >
        {value.AMOUNT.split(".")[1]}
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "var(--fontSemiBold600)",
          marginLeft: 0.5,
        }}
      >
        €
      </Typography>
    </Box>
    <Typography
      sx={{
        whiteSpace: "normal",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxLines: 2,
        fontSize: "12px",
        fontWeight: "var(--fontRegular400)",
        ml: 0.5,
        color: "contentQuaternary.main",
      }}
    >
      {value.STATUS}
    </Typography>
  </Box>
);
