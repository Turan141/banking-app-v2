import React from "react";
import Button from "@mui/material/Button";


const MenuItemButton: React.FC<{ buttonProps: IMenuButton }> = ({ buttonProps }) => {
  return (
    <Button
      startIcon={buttonProps.icon}
      variant="text"
      sx={{
        textTransform: "none",
        backgroundColor: "transparent",
        color: "sideMenuButtonText.main",
        justifyContent:"flex-start",
        alignItems:"center",
        gap: 2,
        pt: 2,
        pb: 2,
        pl: 3,
        pr: 3,
        fontSize:"1rem",
        boxShadow: "none",
        "& svg": {
          //width: "24px", // Set a fixed width for icons (adjust as needed)
        },
      }}
    >
      {buttonProps.name}
    </Button>
  );
};

export default MenuItemButton;
