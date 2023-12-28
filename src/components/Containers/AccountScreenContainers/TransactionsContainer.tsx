import { Box, Divider, Typography } from "@mui/material";
import List from "../../List";
import { transactionMock } from "../../../mockup/TransactionHistory";

export const TransactionsContainer = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "var(--fontRegular400)",
          color: "contentQuaternary.main",
          pt: 3,
        }}
      >
        {/* todo: add seperation by date */}
        11 Dec, 2023
      </Typography>

      <List type="transaction" items={transactionMock as ITransactionVO[]} />

      <Divider />
      <Typography
        sx={{
          p: 2,
          color: "contentAccentBlue.main",
          textAlign: "center",
          fontWeight: "var(--fontSemiBold600)",
        }}
      >
        {/* todo: add opening of all transactions after design */}
        See all transactions
      </Typography>
    </Box>
  );
};
