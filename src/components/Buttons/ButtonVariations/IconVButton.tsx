import { styled } from "@mui/system"
import Box from "@mui/material/Box"
import ButtonBase from "@mui/material/ButtonBase"
import React, { ReactNode } from "react"
import { Typography } from "@mui/material"

const IconVButtonDiv = styled(ButtonBase)(({ theme, selected }) => ({
	position: "relative",
	[theme.breakpoints.down("sm")]: {
		width: "100% !important", // Overrides inline-style
		height: "100%"
	},
	color: "white", // Ripple color for ButtonBase

	"& svg": {
		width: "100%",
		height: "100%"
	},
	stroke: selected ? "#D92626" : "none"
}))

interface IIconVButtonProps {
	icon?: ReactNode
	title?: string
	id?: string
	selected?: boolean
}

export const IconVButton = ({ icon, title, selected }: IIconVButtonProps) => {
	if (!React.isValidElement(icon)) return null

	return (
		<Box sx={{ flex: 1, display: "flex", flexDirection: "column", placeItems: "center" }}>
			<Box
				sx={{
					overflow: "hidden",
					display: "flex",
					placeItems: "center",
					justifyContent: "center"
				}}
			>
				<IconVButtonDiv selected={selected} focusRipple>
					{icon}
				</IconVButtonDiv>
			</Box>
			{title && <Typography sx={{ fontSize: "11px" }}>{title}</Typography>}
		</Box>
	)
}
