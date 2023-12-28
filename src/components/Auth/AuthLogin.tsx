import React from "react";
import { Box } from "@mui/material";
import { AuthSteps } from "./AuthSteps";
import { AuthStatus, S_AUTH_STATUS_DEBUG } from "../../managers/AuthManager";
import { Logo } from "../../assets/icons/Logo";

export const AuthLogin: React.FC = () => {
  return (
    <Box>
      {/*<AuthBackButton />*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Logo />
      </Box>
      <Box>
        <AuthSteps />
      </Box>

      <div onClick={() => S_AUTH_STATUS_DEBUG.invoke(AuthStatus.AUTHORIZED)}>
        DEBUG AUTH COMPLETE
      </div>
    </Box>
  );
};
