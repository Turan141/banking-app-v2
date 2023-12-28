// AuthHelp.tsx
import { Box, Typography } from "@mui/material"
import { useAuthHelp } from "../../hooks/useAuthHelp"

interface IAuthHelpProps {
	step: keyof IAuthData
}

export const AuthHelp: React.FC<IAuthHelpProps> = ({ step }) => {
	if (step === "phone") return null

	const {
		requestHelpText,
		getHelpText,
		helpRequested,
		onGetHelpClick,
		onRequestHelpClick
	} = useAuthHelp(step)

	const showNextHelp = step === "password" || helpRequested

	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='center'
			gap={2}
			sx={{
				color: "#FFFFFF",
				textAlign: "center",
				marginTop: 2
			}}
		>
			{helpRequested && (
				<Typography
					sx={{
						color: helpRequested ? "textGray.color.main" : "activeDot.main",
						textAlign: "center",
						maxWidth: "250px",
						fontSize: "14px"
					}}
				>
					{requestHelpText}
				</Typography>
			)}

			{!showNextHelp ? (
				<Typography
					onClick={onRequestHelpClick}
					sx={{
						fontSize: "14px",
						color: helpRequested ? "#ffffff" : "activeDot.main",
						cursor: "pointer"
					}}
				>
					{requestHelpText}
				</Typography>
			) : (
				<Typography
					onClick={onGetHelpClick}
					sx={{
						fontSize: "14px",
						color: "activeDot.main",
						cursor: "pointer"
					}}
				>
					{getHelpText}
				</Typography>
			)}
		</Box>
	)
}
