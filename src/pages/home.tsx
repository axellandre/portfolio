import Grid from "@mui/material/Grid";
import { Box, Stack } from "@mui/system";
import { Divider, Link, Typography } from "@mui/material";
import palette from "../theme/theme";
import { t } from "i18next";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SouthIcon from "@mui/icons-material/South";
import useResponsive from "../hooks/useResponsive";

export default function HomePage() {
  const isDesktop = useResponsive("up", "sm");
  if (isDesktop) {
    return (
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        mt={2}
      >
        <Grid item xs={2}>
          <Stack direction="column">
            <Stack textAlign="initial">
              <Stack ml={10}>
                <Typography
                  variant="h4"
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                    color: palette.primary,
                  }}
                >
                  {t("home.lastName")}
                </Typography>
                <Stack direction="row">
                  <Typography
                    variant="h4"
                    sx={{
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "normal",
                      color: palette.primary,
                    }}
                  >
                    {t("home.name")}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "normal",
                      color: palette.secondary,
                    }}
                  >
                    .
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    border: `2px solid`,
                    color: palette.secondary,
                    width: "50px",
                    my: 2,
                  }}
                ></Stack>
                <Stack width="fit-content" alignItems="center">
                  <Link
                    href="mailto:a.landre@proxiad.com"
                    sx={{
                      textDecoration: "none",
                      alignItems: "center",
                      border: `3px solid`,
                      color: palette.secondary,
                      px: 1,
                    }}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      whiteSpace="nowrap"
                    >
                      <Typography
                        sx={{
                          color: palette.secondary,
                          fontStyle: "normal",
                          fontWeight: 700,
                          lineHeight: "normal",
                          p: 1,
                          textTransform: "uppercase",
                        }}
                      >
                        {t("home.contactMe")}
                      </Typography>
                      <ArrowForwardIcon />
                    </Stack>
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={7}>
          <Stack ml={2}>
            <Box
              component="img"
              alt="character"
              src="/src/assets/character.svg"
            />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack textAlign="initial">
            <Stack my={3}>
              <Typography
                variant="body1"
                sx={{
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                  color: palette.secondary,
                  textTransform: "uppercase",
                  m: 1,
                }}
              >
                {t("home.introduction")}
              </Typography>
            </Stack>
            <Stack direction="row" width="20px">
              <Typography
                variant="h4"
                sx={{
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                  color: palette.primary,
                  m: 1,
                }}
              >
                {t("home.job")}
              </Typography>
            </Stack>
            <Stack width="90%">
              <Typography
                variant="h5"
                sx={{
                  color: palette.primary,
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                  p: 1,
                  m: 0,
                }}
              >
                {t("home.technologies")}
              </Typography>
            </Stack>
            <Link
              href="/about"
              sx={{ textDecorationLine: "none", color: palette.secondary }}
            >
              <Stack direction="row" alignItems="center">
                <Typography
                  variant="body2"
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "normal",
                    p: 1,
                    m: 0,
                  }}
                >
                  {t("home.moreInformations")}
                </Typography>
                <ArrowForwardIcon />
              </Stack>
            </Link>
          </Stack>
          <Stack direction="row" mt={20} ml={23} alignContent="flex-end">
            <Stack>
              <Box
                component="img"
                alt="fr_flag"
                src="/src/assets/fr_flag.svg"
              />
            </Stack>
            <Stack
              sx={{
                border: `1px solid`,
                color: palette.primary,
                mx: 2,
              }}
            ></Stack>
            <Stack>
              <Box
                component="img"
                alt="en_flag"
                src="/src/assets/en_flag.svg"
              />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    );
  }

  return (
    <Stack direction="column" alignItems="center" my={3}>
      <Stack textAlign="initial">
        <Stack direction="row">
          <Stack mr={1}>
            <Typography
              variant="h3"
              sx={{
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                color: palette.primary,
              }}
            >
              {t("home.lastName")}
            </Typography>
          </Stack>
          <Stack direction="row">
            <Typography
              variant="h3"
              sx={{
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                color: palette.primary,
              }}
            >
              {t("home.name")}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                color: palette.secondary,
              }}
            >
              .
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack my={2}>
        <Divider
          sx={{
            width: "20vw",
            mx: 3,
            color: palette.secondary,
            border: "2px solid",
          }}
        />
      </Stack>
      <Stack>
        <Typography
          variant="h4"
          sx={{
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            color: palette.primary,
            m: 1,
          }}
        >
          {t("home.job")}
        </Typography>
      </Stack>
      <Stack my={2}>
        <Divider
          sx={{
            width: "20vw",
            mx: 3,
            color: palette.primary,
            border: "2px solid",
          }}
        />
      </Stack>
      <Link
        href="/about"
        sx={{ textDecorationLine: "none", color: palette.secondary }}
      >
        <Stack direction="row" alignItems="center">
          <Typography
            variant="h5"
            sx={{
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
              p: 1,
              m: 0,
            }}
          >
            {t("home.moreInformations")}
          </Typography>
          <SouthIcon />
        </Stack>
      </Link>
      <Stack ml={2}>
        <Box
          component="img"
          alt="character"
          src="/src/assets/character.svg"
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            width: "100%",
            height: "auto",
            maxWidth: "100%",
            maxHeight: "100%",
            margin: "auto auto 0",
          }}
        />
      </Stack>
    </Stack>
  );
}
