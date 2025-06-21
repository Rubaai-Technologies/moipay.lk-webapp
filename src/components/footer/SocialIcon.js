import React from "react";
import { Box } from "@mui/material";

const SocialIcon = ({ 
  iconSrc, 
  altText, 
  height,
  width,
  link = "#", 
  hoverScale = 1.12,
  hoverBrightness = 1.1,
  defaultBrightness = 0.8
}) => {
  return (
    <Box
      component="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        display: 'inline-block',
        '& img': {
          width: width,
          height: height,
          filter: `brightness(${defaultBrightness})`,
          transition: 'filter 0.2s, transform 0.2s',
          '&:hover': {
            filter: `brightness(${hoverBrightness})`,
            transform: `scale(${hoverScale})`
          }
        }
      }}
    >
      <Box component="img" src={iconSrc} alt={altText} />
    </Box>
  );
};

export default SocialIcon; 