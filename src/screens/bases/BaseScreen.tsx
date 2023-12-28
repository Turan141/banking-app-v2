import { AppBar, BottomNavigation, Box } from "@mui/material";
import { CSSProperties, ReactNode } from "preact/compat";
import { BottomMenu } from "../../components/BottomMenu";

interface IScreenParams {
  children?: any;
  bottom?: ReactNode;
  head?: ReactNode;
  sx?: CSSProperties;
}

export const BaseScreen = ({ children, bottom, head, sx }: IScreenParams) => {
  if (!bottom) bottom = <BottomMenu />;

  // const rows = [];
  // if (head) rows.push("max-content");
  // rows.push("1fr");
  // if (bottom) rows.push("max-content");

  return (
    <Box display="flex" flexDirection="column">
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "transparent",
          boxShadow: "none",
          top: 0,
        }}
      >
        {head}
      </AppBar>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          // gridTemplateRows: rows.join(" "),
          width: "100vw",
          // minHeight: "100vh",
          backgroundColor: "backgroundBottom.main",
        }}
      >
        <Box
          sx={{
            position: "relative",
            overflowX: "hidden",
            overflowY: "auto",
            width: "100%",
            marginTop: "max-content",
            maxHeight: "calc(100vh - 64px)", // Adjust the height considering AppBar height
            ...sx,
          }}
        >
          {children}
        </Box>
      </Box>
      <BottomNavigation
        showLabels
        // value={value}
        //@ts-ignore
        onChange={(event, newValue) => {}}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          paddingBottom: "env(safe-area-inset-bottom)",
          position: "fixed",
          bottom: 0,
        }}
      >
        {bottom}
      </BottomNavigation>
    </Box>
  );
};

{
  /* <BottomNavigation
  showLabels
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
>
  <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
  <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
  <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
</BottomNavigation>; */
}
