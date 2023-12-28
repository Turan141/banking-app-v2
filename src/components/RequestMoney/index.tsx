import { Box, Typography } from "@mui/material"
import { PopupScreenHeader } from "../PopupScreenHeader"
import { S_PRESENT_SCREEN_ON_MAIN, Screens } from "../../Presenter"
import { RequestMoneyIcon } from "../../assets/icons/RequestMoney"
import { BaseInput } from "../Inputs/BaseInput"
import { TextFieldInput } from "../Inputs/TextFieldInput"

export const RequestMoney = () => {
	return (
		<Box>
			<Box
				sx={{
					height: "100px",
					display: "flex",
					alignItems: "start",
					justifyContent: "center",
					fontSize: "18px",
					backgroundColor: "dark4.main"
				}}
			>
				<PopupScreenHeader
					title='Request money'
					onClose={() =>
						S_PRESENT_SCREEN_ON_MAIN.invoke({
							screen: Screens.START,
							animationDirection: "right"
						})
					}
				/>
			</Box>
			<Box sx={{ mt: 8, position: "relative" }}>
				<Box
					sx={{
						position: "absolute",
						top: "-102px",
						left: "50%",
						transform: "translateX(-50%)",
						height: "72px",
						width: "72px",
						backgroundColor: "depositScreenBG.main",
						borderRadius: "50%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					<RequestMoneyIcon />
				</Box>

				<Box>
					<Typography
						sx={{
							textAlign: "center",
							color: "#ffffff",
							fontSize: "18px"
						}}
					>
						Please enter amount to request money
					</Typography>
				</Box>

				<Box
					sx={{
						width: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						gap: 2,
						mt: 4
					}}
				>
					<BaseInput shouldAutoFocus align='right' onChange={() => {}} value='' width='100px' />
					<Box
						onClick={() =>
							S_PRESENT_SCREEN_ON_MAIN.invoke({
								screen: Screens.CURRENCY_SELECT_POPUP,
								animationDirection: "right"
							})
						}
						sx={{
							width: "80px",
							color: "#ffffff",
							displaY: "flex",
							alignItems: "center",
							justifyContent: "center"
						}}
					>
						USD
					</Box>
				</Box>

				<Box fullwidth sx={{ display: "flex", justifyContent: 'center', mt: 3 }}>
					<TextFieldInput
						placeholder='Message'
						onChange={() => {}}
						value=''
						width='196px'
					/>
				</Box>

				<Box sx={{mt: 4}}>
					<Typography
						sx={{
							textAlign: "center",
							color: "text.secondary",
							fontSize: "14px"
						}}
					>
						Your full name will be shown on payment form
					</Typography>
				</Box>
			</Box>
		</Box>
	)
}
