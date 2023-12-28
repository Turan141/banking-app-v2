import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import { ReactNode } from "react";
import { Typography } from "@mui/material";

const CircleButtonDiv = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: "100%",
  },
  color: "white", // ripple color
  "& svg path": {
    fill: [theme.palette.contentPrimary.main],
  },
}));

interface ICircleButtonProps {
  icon?: ReactNode;
  title?: string;
  onClick?: (e?: MouseEvent) => void;
  styles?: Record<string, any>; // Use Record<string, any> for styles
}

export const CircleButton = ({
  icon,
  title,
  onClick,
  styles,
}: ICircleButtonProps) => {

  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
        gap: 1,
        ...(styles || {}), // Apply styles if they exist
      }}
    >
      <Box
        sx={{
          backgroundColor: 'backgroundRaised.main',
          borderRadius: "50%",
          overflow: "hidden",
          width: "56px",
          height: "56px",
          display: "flex",
          placeItems: "center",
          justifyContent: "center",
          boxShadow: "var(--swissBankShadowSmall)",
        }}
      >
        <CircleButtonDiv focusRipple>{icon}</CircleButtonDiv>
      </Box>
      <Box>
        {title && (
          <Typography sx={{ fontSize: "inherit", textAlign: "center" }}>
            {title}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
