import { ButtonBase, Typography, Box } from "@mui/material"
import { S_PRESENT_SCREEN_ON_MAIN, Screens } from "../../../Presenter"
import { CustomAvatar } from "../../../components/Avatars/CustomAvatar"

interface CurrencyItemProps {
	currencyData: {
		currencyFlag: string
		currencyName: string
		currencySign: string
	}
}

export const CurrencyItem: React.FC<CurrencyItemProps> = ({ currencyData }) => {
	const onCurrencyItemClick = () => {
		// add siqnal here to handle select
		setTimeout(() => {
			S_PRESENT_SCREEN_ON_MAIN.invoke({
				screen: Screens.REQUEST_MONEY_SCREEN,
				animationDirection: "right"
			})
		}, 350)
	}

	return (
		<ButtonBase
			focusRipple
			onClick={onCurrencyItemClick}
			sx={{
				width: "100%",
				height: "50px",
				color: "white",
				display: "flex",
				alignItems: "center",
				justifyContent: "start",
				padding: 2
			}}
		>
			<Box sx={{ mr: 2, width: 32, height: 30 }}>
				<CustomAvatar
					srcSet={`https://flagcdn.com/w40/${currencyData.currencyFlag?.toLowerCase()}.png 2x`}
					src={`https://flagcdn.com/w20/${currencyData.currencyFlag?.toLowerCase()}.png`}
					alt='countryflag'
				/>
			</Box>
			<Typography variant='body1' mr={1}>
				{currencyData.currencyName}
			</Typography>
			<Typography variant='body1'>{currencyData.currencySign}</Typography>
		</ButtonBase>
	)
}
