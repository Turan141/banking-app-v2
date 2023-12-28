import { Box, Typography } from "@mui/material"
import { UDS } from "../../assets/flags/usd"
import { ArrowDown } from "../../assets/icons/ArrowDown"

const LanguageSelect = () => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				gap: 2,
				pl:2,
				pb:1
			}}
		>
			<UDS />
			<Typography color="white">EN</Typography>
			<ArrowDown />
		</Box>
	)
}

export default LanguageSelect
