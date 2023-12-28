import { Box, Typography } from "@mui/material"
import { Link } from "../../assets/icons/Link"
import { NewCard } from "../../assets/icons/NewCard"
import { RectangleButton } from "../Buttons/ButtonVariations/RectangleButton"
import { S_PRESENT_SCREEN_ON_MAIN, Screens } from "../../Presenter"

interface ButtonData {
	icon: JSX.Element
	title: string
	onClick?: () => void
}

const buttonsData: ButtonData[] = [
	{
		icon: <NewCard />,
		title: "Order New Card",
		onClick: () => {
			S_PRESENT_SCREEN_ON_MAIN.invoke({
				screen: Screens.NEW_CARD_ORDER_SCREEN,
				animationDirection: "right"
			})
		}
	},
	{ icon: <Link />, title: "Add Card", onClick: () => {} }
]

export const DepositFromCard = () => {
	return (
		<Box>
			<Box>
				<Typography
					variant='h4'
					sx={{ fontSize: "18px", color: "white", fontWeight: "bold" }}
				>
					Deposit from Card
				</Typography>
			</Box>
			<Box display='flex' gap={1.5}>
				{buttonsData.map((button) => (
					<Box
						display='flex'
						alignItems='start'
						justifyContent='center'
						onClick={button?.onClick}
						key={button.title}
						sx={{
							display: "flex",
							width: "150px",
							borderRadius: "4px",
							color: "white",
							height: "100%"
						}}
						mt={2}
						mb={1}
					>
						<RectangleButton
							width={36}
							height={36}
							icon={button.icon}
							title={button.title}
						/>
					</Box>
				))}
			</Box>
		</Box>
	)
}
