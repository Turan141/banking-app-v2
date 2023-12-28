import { CircularProgress, Box, Typography } from "@mui/material";

export const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <CircularProgress color="primary" size={60} />
      <Typography variant="body1" mt={2}>
        Loading...
      </Typography>
    </Box>
  );
};

