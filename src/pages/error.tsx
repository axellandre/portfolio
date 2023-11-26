import { Box, Typography, Stack } from "@mui/material";
import { t } from "i18next";
import palette from "../theme/theme";
import useResponsive from "../hooks/useResponsive";

export default function ErrorPage() {
  const isDesktop = useResponsive("up", "sm");
  if (isDesktop) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Stack direction="row" alignItems="center">
          <Box
            component="img"
            alt="character"
            src="/src/assets/logo_error.svg"
            sx={{
              width: "40vh",
            }}
          />
          <Stack direction="row" mt={15}>
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                color: palette.primary,
                fontSize: "200px",
                textShadow: `2px 2px 4px ${palette.shadow}, -2px -2px 4px ${palette.shadow}`,
              }}
            >
              {t("error.four")}
            </Typography>
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                color: palette.secondary,
                fontSize: "200px",
                textShadow: `2px 2px 4px ${palette.shadow}, -2px -2px 4px ${palette.shadow}`,
              }}
            >
              {t("error.zero")}
            </Typography>
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                color: palette.primary,
                fontSize: "200px",
                textShadow: `2px 2px 4px ${palette.shadow}, -2px -2px 4px ${palette.shadow}`,
              }}
            >
              {t("error.four")}
            </Typography>
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
        <Typography
          variant="h6"
          sx={{
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            color: palette.primary,
            textAlign: "center",
            mb: 1,
          }}
        >
          {t("error.pageNotFoundDescription")}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            color: palette.primary,
            textAlign: "center",
            mb: 1,
          }}
        >
          {t("error.urlError")}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            color: palette.primary,
            textAlign: "center",
            mb: 1,
          }}
        >
          {t("error.verifySyntax")}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box
        component="img"
        alt="character"
        src="/src/assets/logo_error.svg"
        sx={{
          width: "40vh",
        }}
      />
      <Stack direction="row">
        <Typography
          sx={{
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            color: palette.primary,
            fontSize: "150px",
            textShadow: `2px 2px 4px ${palette.shadow}, -2px -2px 4px ${palette.shadow}`,
          }}
        >
          {t("error.four")}
        </Typography>
        <Typography
          sx={{
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            color: palette.secondary,
            fontSize: "150px",
            textShadow: `2px 2px 4px ${palette.shadow}, -2px -2px 4px ${palette.shadow}`,
          }}
        >
          {t("error.zero")}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            color: palette.primary,
            fontSize: "150px",
            textShadow: `2px 2px 4px ${palette.shadow}, -2px -2px 4px ${palette.shadow}`,
          }}
        >
          {t("error.four")}
        </Typography>
      </Stack>
      <Typography
        variant="h5"
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
      <Typography
        sx={{
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
          color: palette.primary,
          textAlign: "center",
          mb: 1,
          fontSize: "15px",
        }}
      >
        {t("error.pageNotFoundDescription")}
      </Typography>
      <Typography
        sx={{
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
          color: palette.primary,
          textAlign: "center",
          mb: 1,
          fontSize: "15px",
        }}
      >
        {t("error.urlError")}
      </Typography>
      <Typography
        sx={{
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
          color: palette.primary,
          textAlign: "center",
          mb: 1,
          fontSize: "15px",
        }}
      >
        {t("error.verifySyntax")}
      </Typography>
    </Box>
  );
}
