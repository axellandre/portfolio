import { Box, Typography, Stack } from "@mui/material";
import { palette, errorStyles } from "../theme/theme";
import useResponsive from "../hooks/useResponsive";
import { useTranslation } from "react-i18next";
import { useEffect, ReactNode } from "react";
import logoError from "../assets/logo_error.svg";

interface ErrorNumberProps {
  color: string;
  size: string;
  children: ReactNode;
}

const ErrorNumber = ({ color, size, children }: ErrorNumberProps) => (
  <Typography
    sx={{
      ...errorStyles.largeText,
      color: color,
      fontSize: size,
    }}
  >
    {children}
  </Typography>
);

interface ErrorDescriptionProps {
  children: ReactNode;
}

const ErrorDescription = ({ children }: ErrorDescriptionProps) => (
  <Typography variant="h6" sx={errorStyles.descriptionText}>
    {children}
  </Typography>
);

export default function ErrorPage() {
  const isDesktop = useResponsive("up", "sm");
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("menu.error")}`;
  }, [t]);

  const renderErrorNumbers = (size: string) => (
    <>
      <ErrorNumber color={palette.primary} size={size}>
        4
      </ErrorNumber>
      <ErrorNumber color={palette.secondary} size={size}>
        0
      </ErrorNumber>
      <ErrorNumber color={palette.primary} size={size}>
        4
      </ErrorNumber>
    </>
  );

  const renderDescriptions = () => (
    <>
      <ErrorDescription>{t("error.pageNotFoundDescription")}</ErrorDescription>
      <ErrorDescription>{t("error.urlError")}</ErrorDescription>
      <ErrorDescription>{t("error.verifySyntax")}</ErrorDescription>
    </>
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100dvh"
    >
      <Stack direction={isDesktop ? "row" : "column"} alignItems="center">
        <Box
          component="img"
          alt="character"
          src={logoError}
          loading="lazy"
          sx={{ width: "40vh" }}
        />
        <Stack direction="row" mt={isDesktop ? 15 : 0}>
          {renderErrorNumbers(isDesktop ? "200px" : "150px")}
        </Stack>
      </Stack>
      <Typography
        variant="h3"
        sx={{
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
          color: palette.primary,
          mb: 3,
        }}
      >
        {t("error.pageNotFound")}
      </Typography>
      {isDesktop && renderDescriptions()}
    </Box>
  );
}
