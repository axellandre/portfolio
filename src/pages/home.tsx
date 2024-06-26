import Grid from '@mui/material/Grid';
import { Box, Stack } from '@mui/system';
import { Link, Typography } from '@mui/material';
import palette from '../theme/theme';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useResponsive from '../hooks/useResponsive';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import characterPicture from '../assets/character.svg';

export default function HomePage() {
  const isDesktop = useResponsive('up', 'lg'); 
  const { t } = useTranslation();

    useEffect(() => {
        document.title = `${t('menu.home')}`;
    }, [t]);
    
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: { xs: '5vh', sm: '5vh', md: '5vh', lg: '25vh' } }}
    >
      <Grid item xs={12} lg={2} zIndex={1}>
        <Stack direction="column">
          <Stack textAlign={{ xs: 'center', lg: 'initial' }}>
            <Stack ml={{ lg: 10 }}>
              <Typography
                variant={isDesktop ? 'h4' : 'h5'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: 'normal',
                  color: palette.primary,
                }}
              >
                {t('home.lastName')}
              </Typography>
              <Stack direction="row" justifyContent={{ xs: 'center', lg: 'initial' }}>
                <Typography
                  variant={isDesktop ? 'h4' : 'h5'}
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal',
                    color: palette.primary,
                  }}
                >
                  {t('home.name')}
                </Typography>
                <Typography
                  variant={isDesktop ? 'h4' : 'h5'}
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal',
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
                  width: '50px',
                  my: 2,
                  mx: { xs: 'auto', lg: 0 }
                }}
              ></Stack>
                {isDesktop && 
              <Stack width="fit-content" alignItems="center" mx={{ xs: 'auto', lg: 0 }}                  
                 zIndex={1}>
                <Link
                  href="mailto:a.landre@proxiad.com"
                  sx={{
                    textDecoration: 'none',
                    alignItems: 'center',
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
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: 'normal',
                        p: 1,
                        textTransform: 'uppercase',
                      }}
                    >
                      {t('home.contactMe')}
                    </Typography>
                    <ArrowForwardIcon />
                  </Stack>
                </Link>
              </Stack>
                  }
            </Stack>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} lg={7} zIndex={0}>
        <Box
          component="img"
          alt="character"
          src={characterPicture}
          loading="lazy"
          sx={{
            width: { xs: '80%', sm: '55%', md: '40%', lg: '100%' },
            height: 'auto',
            maxWidth: '100%',
            maxHeight: '80%',
            mx: 'auto',
            position: { lg: 'absolute' },
            top: { lg: 50 },
            right: { lg: 50 },
            transform: { xs: 'translate(-22px, 10px)' }
          }}
        />
      </Grid>
      <Grid item xs={12} lg={3}>
        <Stack textAlign={{ xs: 'center', lg: 'initial' }}>
          <Stack>
            <Typography
              variant="body1"
              sx={{
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal',
                color: palette.secondary,
                textTransform: 'uppercase',
                m: 1,
              }}
            >
              {t('home.introduction')}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent={{ xs: 'center', lg: 'initial' }} width={{ lg: "20px" }}>
            <Typography
              variant={isDesktop ? 'h4' : 'h5'}
              sx={{
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal',
                color: palette.primary,
                m: 1,
              }}
            >
              {t('home.job')}
            </Typography>
          </Stack>
          <Link
            href="/about"
            sx={{ textDecorationLine: 'none', color: palette.secondary }}
            zIndex={1}
          >
            <Stack direction="row" alignItems="center" justifyContent={{ xs: 'center', lg: 'initial' }}>
              <Typography
                variant="body2"
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: 'normal',
                  p: 1,
                  m: 0,
                }}
              >
                {t('home.moreInformations')}
              </Typography>
              <ArrowForwardIcon />
            </Stack>
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
}
