import { Box } from "@mui/material"
import { AuthLogin } from "../components/Auth/AuthLogin"
import bgImage from "../assets/bg/auth_page_bg.jpg" // Adjust the path according to your folder structure

export const AuthLoginScreen=()=>{
    return <Box
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
}