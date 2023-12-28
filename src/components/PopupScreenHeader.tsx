import { Box, Typography } from "@mui/material"
import { CloseIcon } from "../assets/icons/CloseIcon"

interface PopupScreenHeaderProps {
	title: string
	onClose: () => void
}

export const PopupScreenHeader: React.FC<PopupScreenHeaderProps> = ({
	title,
	onClose
}) => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				marginBottom: 2
			}}
		>
			<Box sx={{ marginTop: 2 }}>
				<Typography sx={{ color: "#ffffff", fontSize: "18px" }} variant='h5'>
					{title}
				</Typography>
			</Box>
			<Box
				onClick={onClose}
				sx={{ position: "absolute", right: "20px", top: "16px", width: "28px" }}
			>
				<CloseIcon />
			</Box>
		</Box>
	)
}
