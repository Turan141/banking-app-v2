import { Box } from "@mui/material";
import { CircleButton } from "./ButtonVariations/CircleButton";

interface Button {
  onClick: () => void;
  icon: React.ReactNode;
  title: string;
}

interface ButtonsRowProps {
  buttons: Button[];
}

export const HorizontalButtonsRow: React.FC<ButtonsRowProps> = ({ buttons }) => (
  <Box
    display="flex"
    sx={{
      pb: 2,
      pt: 2,
      pl: 1,
      pr: 1,
      width: "100%",
      justifyContent: "space-between",
    }}
  >
    {buttons.map((button, index) => (
      <CircleButton
        key={index}
        onClick={button.onClick}
        icon={button.icon}
        title={button.title}
      />
    ))}
  </Box>
);
