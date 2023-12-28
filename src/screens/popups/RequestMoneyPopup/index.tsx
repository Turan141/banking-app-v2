import { Box } from "@mui/material"
import { RequestMoney } from "../../../components/RequestMoney"

export const RequestMoneyPopup = () => {
	return (
		<Box sx={{ backgroundColor: "depositScreenBG.main", height: "100%" }}>
			<RequestMoney />
		</Box>
	)
}
