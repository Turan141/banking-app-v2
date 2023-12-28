import { Box, Typography } from "@mui/material";

export const BalanceSection = ({
  value,
  getItemSymbol,
}: {
  value: IAccountVO;
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
    <Box display="flex" alignItems="baseline">
      <Typography
        sx={{
          whiteSpace: "nowrap",
          fontSize: "16px",
          fontWeight: "var(--fontSemiBold600)",
        }}
      >
        {(value.BALANCE + "").split(".")[0]}.
      </Typography>
      <Typography
        sx={{
          whiteSpace: "nowrap",
          fontSize: "14px",
          fontWeight: "var(--fontSemiBold600)",
        }}
      >
        {(value.BALANCE + "").split(".")[1]}
      </Typography>
      <Typography
        sx={{
          whiteSpace: "nowrap",
          fontSize: "16px",
          fontWeight: "var(--fontSemiBold600)",
          ml: 0.5,
        }}
      >
        {getItemSymbol()}
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
      51438.40 €
    </Typography>
  </Box>
);
