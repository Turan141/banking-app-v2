import { styled } from "@mui/system"
import Box from "@mui/material/Box"
import ButtonBase from "@mui/material/ButtonBase"
import React from "react"
import { Typography } from "@mui/material"

const RectangleButtonDiv = styled(ButtonBase)(({ theme }) => ({
	position: "relative",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	gap: "15px",
	[theme.breakpoints.down("sm")]: {
		width: "100% !important", // Overrides inline-style
		height: "100%"
	},
	color: "white" // ripple color
}))

interface RectangleButtonProps {
	icon?: React.ReactNode
	title?: string
	onClick?: (e: any) => void
	width?: number
	height?: number
}

export const RectangleButton: React.FC<RectangleButtonProps> = ({
	icon,
	title,
	onClick,
	width = 24,
	height = 24
}: RectangleButtonProps) => {
	return (
		<Box
			onClick={onClick}
			sx={{ display: "flex", flexDirection: "column", placeItems: "center", gap: 1 }}
		>
			<Box
				sx={{
					backgroundColor: "dark4.main",
					borderRadius: "6px",
					overflow: "hidden",
					width: "150px",
					height: "100px",
					display: "flex",
					placeItems: "center",
					justifyContent: "center",
					flexDirection: "column"
				}}
			>
				<RectangleButtonDiv focusRipple>
					<Box
						sx={{
							width: `${width}px`,
							height: `${height}px`,
							svg: {
								width: "100%",
								height: "100%"
							}
						}}
					>
						{icon && React.cloneElement(icon as any)}
					</Box>
					<Box>
						{title && <Typography sx={{ textAlign: "center", fontSize: '14px', color: '#EDF1F5' }}>{title}</Typography>}
					</Box>
				</RectangleButtonDiv>
			</Box>
		</Box>
	)
}
