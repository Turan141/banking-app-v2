import { Box } from "@mui/material";
import { FC } from "react";
import { AccountHead } from "../components/AccountHead";
import { BottomMenu } from "../components/BottomMenu";
import { CircleButton } from "../components/Buttons/ButtonVariations/CircleButton";
import { BankTransfer } from "../assets/icons/BankTransfer";
import { InvestBlockchain } from "../assets/icons/InvestBlockchain";
import { Neteller } from "../assets/icons/Neteller";
import { PaymentCard } from "../assets/icons/PaymentCard";
import { Skrill } from "../assets/icons/Skrill";
import { BaseScreen } from "./bases/BaseScreen";
import { DepositFromCard } from "../components/DepositFromCard";

interface ButtonData {
  icon: JSX.Element;
  title: string;
}

const buttonsData: ButtonData[] = [
  { icon: <PaymentCard />, title: "Payment Card" },
  { icon: <BankTransfer />, title: "Bank Transfer" },
  { icon: <Skrill />, title: "Skrill" },
  { icon: <Neteller />, title: "Neteller" },
  { icon: <InvestBlockchain />, title: "Invest from Blockchain" },
];

export const DepositScreen: FC = () => {
  return (
    <BaseScreen head={<AccountHead />} bottom={<BottomMenu />}>
      <Box
        sx={{
          backgroundColor: "depositScreenBG.main",
          pl: 2,
          pr: 2,
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: 1,
            width: "100%",
            pt: 2,
            pb: 2,
          }}
        >
          {buttonsData.map((button) => (
            <Box
              display="flex"
              alignItems="start"
              justifyContent="center"
              key={button.title}
              sx={{ display: "flex", width: "calc(23% - 1px)", color: "white" }}
              mt={2}
              mb={1}
            >
              <CircleButton
                icon={button.icon || <Box sx={{ width: 24, height: 24 }} />}
                title={button.title}
                styles={{ fontSize: "14px" }}
              />
            </Box>
          ))}
        </Box>
        <DepositFromCard />
      </Box>
    </BaseScreen>
  );
};
