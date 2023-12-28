import { Box, Typography } from "@mui/material";
import { Burger } from "../assets/icons/Burger";
import { GD } from "../GD";
import { VerticalDots } from "../assets/icons/VerticalDots";

export const AccountHead = () => {
  return (
    <Box
      sx={{
        backgroundColor:"backgroundDefault.main",
        color: "headerText.main",
        display: "flex",
        paddingTop: "var(--iosSafeTopArea)",
        pl: 2,
        pr: 2,
        pt: 2,
        pb: 2,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "max-content 1fr max-content",
        }}
      >
        <Box
          onClick={() => {
            GD.S_MAIN_BURGER_CLICK.invoke();
          }}
          display="flex"
          alignItems="center"
        >
          <Burger />
        </Box>
        <Typography
          sx={{
            color: "contentPrimary.main",
            fontSize: "20px",
            fontWeight: 600,
            letterSpacing: "-0.4px",
            textAlign: "left",
            marginLeft: 2,
          }}
          variant="h6"
        >
          Bank
        </Typography>
      </Box>

      <Box display="flex" alignItems="center">
        <VerticalDots />
      </Box>
    </Box>
  );
};
