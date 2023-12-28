import { Box, Typography } from "@mui/material"
import { CardExample } from "../../../assets/icons/CardExample"
import { RectangleButton } from "../../../components/Buttons/ButtonVariations/RectangleButton"
import { PlasticCard } from "../../../assets/icons/PlasticCard"
import { VirtualCard } from "../../../assets/icons/VirtualCard"
import { S_PRESENT_SCREEN_ON_MAIN, Screens } from "../../../Presenter"
import { PopupScreenHeader } from "../../../components/PopupScreenHeader"

export const NewCardOrderPopup = () => {
	return (
		<Box sx={{ backgroundColor: "depositScreenBG.main", pl: 2, pr: 2, height: "100%" }}>
			{/* Header */}
			<PopupScreenHeader
				title='Order new card'
				onClose={() =>
					S_PRESENT_SCREEN_ON_MAIN.invoke({
						screen: Screens.DEPOSIT_SCREEN,
						animationDirection: "right"
					})
				}
			/>
			{/* Card SVG */}
			<Box display='flex' justifyContent='center'>
				<CardExample />
			</Box>
			{/* Select Card Type Title */}
			<Box mt={2}>
				<Typography sx={{ color: "#ffffff", textAlign: "center" }} variant='h6'>
					Select Card Type
				</Typography>
			</Box>
			{/* Buttons - Plastic and Virtual */}
			<Box fullWidth display='flex' justifyContent='center' mt={2} gap={2}>
				<Box
					display='flex'
					alignItems='start'
					justifyContent='center'
					sx={{
						display: "flex",
						borderRadius: "4px",
						color: "white",
						height: "100%"
					}}
					mt={2}
					mb={1}
				>
					<RectangleButton
						icon={<PlasticCard />}
						title='Plastic'
						width={36}
						height={36}
					/>
				</Box>
				<Box
					display='flex'
					alignItems='start'
					justifyContent='center'
					sx={{
						display: "flex",
						borderRadius: "4px",
						color: "white",
						height: "100%"
					}}
					mt={2}
					mb={1}
				>
					<RectangleButton
						icon={<VirtualCard />}
						title='Virutal'
						width={36}
						height={36}
					/>
				</Box>
			</Box>
		</Box>
	)
}
