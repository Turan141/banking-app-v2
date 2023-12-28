import { useEffect, useState } from "react"
import { Box, Typography } from "@mui/material"
import { S_AUTH_DATA_FAILURE } from "../../managers/AuthManager"

export const AuthErrors = () => {
	const [errorText, setErrorText] = useState<string>("")

	useEffect(() => {
		S_AUTH_DATA_FAILURE.subscribe((packet) => {
			setErrorText(packet.errorText)
		}, "AuthErrors")

		return () => {
			S_AUTH_DATA_FAILURE.unsubscribe("AuthErrors")
		}
	}, [])



	return (
		<Box display='flex' justifyContent='center'>
			<Typography sx={{
				color: "activeDot.main",
				textAlign: "center",
				marginTop: 2,
				maxWidth: "250px",
				fontSize: "14px"
			}}>{errorText}</Typography>
		</Box>
	)
}
