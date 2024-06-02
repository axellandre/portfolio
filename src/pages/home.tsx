import i18n from '../locales/i18n';
import Grid from '@mui/material/Grid';
import { Box, Stack } from '@mui/system';
import { Divider, Link, Typography } from '@mui/material';
import palette from '../theme/theme';
import { t } from 'i18next';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SouthIcon from '@mui/icons-material/South';
import useResponsive from '../hooks/useResponsive';
import { useEffect, useState } from 'react';
import frFlagBW from '/src/assets/fr_flag_bw.svg';
import enFlagBW from '/src/assets/en_flag_bw.svg';

export default function HomePage() {
  const isDesktop = useResponsive('up', 'sm');
  const isTablet = useResponsive('only', 'sm');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
    i18n.changeLanguage(savedLanguage);
  }, []);
  

  const handleLanguageChange = (lng : string) => {
    i18n.changeLanguage(lng).then(() => {
      localStorage.setItem('language', lng);
      setCurrentLanguage(lng);
    });
  };

  if (isDesktop && !isTablet) {
    return (
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: '25vh' }}
      >
        <Grid item xs={2}>
          <Stack direction="column">
            <Stack textAlign="initial">
              <Stack ml={10}>
                <Typography
                  variant="h4"
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal',
                    color: palette.primary,
                  }}
                >
                  {t('home.lastName')}
                </Typography>
                <Stack direction="row">
                  <Typography
                    variant="h4"
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
                    variant="h4"
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
                  }}
                ></Stack>
                <Stack width="fit-content" alignItems="center">
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
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={7}>
          <Box
            component="img"
            alt="character"
            src="/src/assets/character.svg"
            loading='lazy'
            sx={{
              top: 50,
              right: 50,
              position: 'absolute',
              width: '100%',
              height: 'auto',
              maxWidth: '100%',
              maxHeight: '95%',
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <Stack textAlign="initial">
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
            <Stack direction="row" width="20px">
              <Typography
                variant="h4"
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
            >
              <Stack direction="row" alignItems="center">
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
          <Stack
            direction="row"
            ml={23}
            alignContent="flex-end"
            sx={{ position: 'absolute', bottom: '5%' }}
          >
            <Stack>
              <Box
                component="img"
                alt="fr_flag"
                src={currentLanguage === 'fr' ? '/src/assets/fr_flag.svg' : frFlagBW } 
                loading='lazy'
                onClick={() => handleLanguageChange('fr')}
                sx={{ cursor: 'pointer' }}
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
                src={currentLanguage === 'en' ? '/src/assets/en_flag.svg' : enFlagBW } 
                loading='lazy'
                onClick={() => handleLanguageChange('en')}
                sx={{ cursor: 'pointer' }}
              />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    );
  } else if (isTablet) {
    return (
      <Stack direction="column" alignItems="center" my={3}>
        <Stack textAlign="initial">
          <Stack direction="row">
            <Stack mr={1}>
              <Typography
                variant="h3"
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: 'normal',
                  color: palette.primary,
                }}
              >
                {t('home.lastName')}
              </Typography>
            </Stack>
            <Stack direction="row">
              <Typography
                variant="h3"
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
                variant="h3"
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
          </Stack>
        </Stack>
        <Stack my={2}>
          <Divider
            sx={{
              width: '20vw',
              mx: 3,
              color: palette.secondary,
              border: '2px solid',
            }}
          />
        </Stack>
        <Stack zIndex={1}>
          <Typography
            variant="h4"
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
        <Stack my={2} zIndex={1}>
          <Divider
            sx={{
              width: '20vw',
              mx: 3,
              color: palette.primary,
              border: '2px solid',
            }}
          />
        </Stack>
        <Stack zIndex={1}>
          <Link
            href="/about"
            sx={{ textDecorationLine: 'none', color: palette.secondary }}
          >
            <Stack direction="row" alignItems="center" zIndex={1}>
              <Typography
                variant="h5"
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
              <SouthIcon />
            </Stack>
          </Link>
        </Stack>
        <Stack ml={2} zIndex={0}>
          <Box
            component="img"
            alt="character"
            src="/src/assets/character.svg"
            loading='lazy'
            sx={{
              top: 0,
              bottom: 0,
              left: '-40px',
              position: 'absolute',
              width: '100vw',
              height: 'auto',
              margin: 'auto auto 0',
            }}
          />
        </Stack>
        <Stack direction="row" alignContent="center" justifyContent="center" mt={2}>
          <Stack>
            <Box
              component="img"
              alt="fr_flag"
              src="/src/assets/fr_flag.svg"
              loading='lazy'
              onClick={() => handleLanguageChange('fr')}
              sx={{ cursor: 'pointer' }}
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
              loading='lazy'
              onClick={() => handleLanguageChange('en')}
              sx={{ cursor: 'pointer' }}
            />
          </Stack>
        </Stack>
      </Stack>
    );
  } else {
    return (
      <Stack direction="column" alignItems="center" my={3}>
        <Stack textAlign="initial">
          <Stack direction="row">
            <Stack mr={1}>
              <Typography
                variant="h3"
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: 'normal',
                  color: palette.primary,
                }}
              >
                {t('home.lastName')}
              </Typography>
            </Stack>
            <Stack direction="row">
              <Typography
                variant="h3"
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
                variant="h3"
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
          </Stack>
        </Stack>
        <Stack my={2}>
          <Divider
            sx={{
              width: '20vw',
              mx: 3,
              color: palette.secondary,
              border: '2px solid',
            }}
          />
        </Stack>
        <Stack zIndex={1}>
          <Typography
            variant="h4"
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
        <Stack my={2} zIndex={1}>
          <Divider
            sx={{
              width: '20vw',
              mx: 3,
              color: palette.primary,
              border: '2px solid',
            }}
          />
        </Stack>
        <Stack zIndex={1}>
          <Link
            href="/about"
            sx={{ textDecorationLine: 'none', color: palette.secondary }}
          >
            <Stack direction="row" alignItems="center" zIndex={1}>
              <Typography
                variant="h5"
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
              <SouthIcon />
            </Stack>
          </Link>
        </Stack>
        <Stack ml={2} zIndex={0}>
          <Box
            component="img"
            alt="character"
            src="/src/assets/character.svg"
            loading='lazy'
            sx={{
              top: 0,
              bottom: 0,
              left: '-65px',
              position: 'absolute',
              width: '120vw',
              height: 'auto',
              margin: 'auto auto 0',
            }}
          />
        </Stack>
        <Stack direction="row" alignContent="center" justifyContent="center" mt={2}>
          <Stack>
            <Box
              component="img"
              alt="fr_flag"
              src="/src/assets/fr_flag.svg"
              loading='lazy'
              onClick={() => handleLanguageChange('fr')}
              sx={{ cursor: 'pointer' }}
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
              loading='lazy'
              onClick={() => handleLanguageChange('en')}
              sx={{ cursor: 'pointer' }}
            />
          </Stack>
        </Stack>
      </Stack>
    );
  }
}
