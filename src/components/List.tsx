import { Box } from "@mui/material";
import { CommonListItem } from "./CommonListItem/CommonListItem";

type ListItemType = IAccountVO | ITransactionVO | IDukasCoinBalanceVO;

interface IListProps {
  type: "accountStat" | "dukascoins" | "transaction";
  items: ListItemType[];
}

const List: React.FC<IListProps> = ({ type, items }) => {
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      {items?.map((item, index) => (
        <CommonListItem key={index} type={type} value={item} />
      ))}
    </Box>
  );
};

export default List;
