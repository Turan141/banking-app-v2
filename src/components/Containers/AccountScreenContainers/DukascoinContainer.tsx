import { Box } from "@mui/material";
import { dukasCoinBalanceMock } from "../../../mockup/DukascoinMoock";
import List from "../../List";
import { HorizontalButtonsRow } from "../../Buttons/HorizontalButtonsRow";
import { dukascoinButtonsRow } from "../../Buttons/ButtonLayouts/AccountScreenButtonRows";

export const DukascoinContainer = () => {
  return (
    <Box>
      <HorizontalButtonsRow buttons={dukascoinButtonsRow} />
      <List
        type="dukascoins"
        items={dukasCoinBalanceMock as IDukasCoinBalanceVO[]}
      />
    </Box>
  );
};
