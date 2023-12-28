import { Box } from "@mui/material"
import { REQ_ACCOUNT_GET_HOME } from "../../managers/AccounHomeManager"
import {  CardItem } from "./CardItem"

const CreditCards = () => {
	const [accountHomeData] = REQ_ACCOUNT_GET_HOME.useRequest()
	//@ts-ignore
	const cardsList = accountHomeData?.["prepaid-cards"]?.cards

	return (
		<Box>
			{cardsList?.map((card: any) => (
				<CardItem cardDetails={card} />
			))}
		</Box>
	)
}

export default CreditCards
