import { Box, Typography, Avatar as MuiAvatar, SvgIcon } from "@mui/material";

interface AvatarProps {
  name?: string;
  src?: string;
  srcSet?: string;
  svg?: React.ReactNode;
  alt: string;
  size?: string | number;
}

const renderSvgAvatar = (svg: React.ReactNode, size: string | number = 29) => (
  <MuiAvatar sx={{ width: size, height: size, backgroundColor: 'transparent' }}>
    <SvgIcon sx={{width: '100%', height: "100%"}}>{svg}</SvgIcon>
  </MuiAvatar>
);

const renderImageAvatar = (src: string, srcSet: string | undefined, alt: string, size: string | number) => (
  <MuiAvatar
    alt={alt}
    src={src}
    srcSet={srcSet}
    sx={{ width: size, height: size }}
    loading="lazy"
  />
);

const renderAvatarWithInitials = (name: string, size: string | number) => {
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");

  return (
    <Box
      sx={{
        width: size,
        height: size,
        maxWidth: size,
        maxHeight: size,
        borderRadius: "50%",
        backgroundColor: "backgroundBottom.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
      }}
    >
      <Typography variant="caption" sx={{ fontWeight: "400", fontSize: "16px" }}>
        {initials}
      </Typography>
    </Box>
  );
};

const renderDefaultAvatar = (alt: string, size: string | number) => (
  <MuiAvatar alt={alt} sx={{ width: size, height: size }}>
    No Avatar
  </MuiAvatar>
);

export const CustomAvatar: React.FC<AvatarProps> = ({
  name,
  src,
  srcSet,
  svg,
  alt,
  size = "36px",
}) => {
  if (svg) {
    return renderSvgAvatar(svg, size);
  } else if (src) {
    return renderImageAvatar(src, srcSet, alt, size);
  } else if (name) {
    return renderAvatarWithInitials(name, size);
  } else {
    return renderDefaultAvatar(alt, size);
  }
};
