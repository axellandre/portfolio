const palette = {
  primary: '#2C4243',
  secondary: '#D4AF37',
  tertiary: '#FDF2D6',
  white: '#FFFFFF',
  shadow: '#00000040',
};

const errorStyles = {
  largeText: {
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    textShadow: `2px 2px 4px ${palette.shadow}, -2px -2px 4px ${palette.shadow}`,
  },
  descriptionText: {
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    color: palette.primary,
    textAlign: "center",
    mb: 1,
  },
};

export { palette, errorStyles };
