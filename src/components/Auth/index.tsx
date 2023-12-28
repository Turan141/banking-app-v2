import React from "react"
import { AuthLogin } from "./AuthLogin"
import { Box } from "@mui/material"
import bgImage from "../../assets/bg/auth_page_bg.jpg" // Adjust the path according to your folder structure



const Auth: React.FC = () => {
	// todo add register screen

	return (
		<Box
			sx={{
				backgroundImage: `url(${bgImage})`,
				backgroundSize: "cover",
				height: "100vh",
				width: "100vw",
				display: "flex",
				flexDirection: "column",
				alignItems: "center"
			}}
		>
			<AuthLogin />
		</Box>
	)
}

export default Auth
