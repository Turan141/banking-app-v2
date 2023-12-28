import { Box, TextField, InputAdornment, Typography } from "@mui/material"
import React from "preact/compat"
import { useAuthInput } from "../../hooks/useAuthForm"

interface IAuthInputProps {
	currentStep: IAuthStepData
}

const InputLabel: React.FC<{ label: string }> = ({ label }) => {
	return (
		<Box
			sx={{
				color: "#FFFFFf",
				textAlign: "center",
				marginTop: 4,
				marginBottom: 4
			}}
		>
			<Typography sx={{ fontSize: "14px" }}>{label}</Typography>
		</Box>
	)
}

export const AuthInput: React.FC<IAuthInputProps> = ({ currentStep }) => {
	const { id, type, label, icon } = currentStep
	const { value, onChange } = useAuthInput(id, "")

	return (
		<Box fullWidth mt={2} display='flex' flexDirection='column' alignItems='center'>
			<InputLabel label={label} />
			<TextField
				value={value}
				onChange={(e: any) => onChange(e.target.value)}
				fullWidth
				variant='standard'
				type={type}
				sx={{ alignItems: "center" }}
				InputProps={{
					startAdornment: (
						<InputAdornment sx={{ marginRight: "15px" }} position='start'>
							{icon}
						</InputAdornment>
					),
					disableUnderline: true,
					sx: {
						borderRadius: "0",
						borderBottom: "1px solid gray",
						paddingBottom: 1,
						caretColor: "redUnderline.main",
						color: "#FFFFFF",
						fontSize: "18px",
						letterSpacing: "1px",
						fontWeight: 400,
						maxWidth: "250px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}
				}}
			/>
		</Box>
	)
}
