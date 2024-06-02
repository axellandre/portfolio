import Grid from '@mui/material/Grid';
import { Box, Stack } from '@mui/system';
import { Divider, Link, Typography } from '@mui/material';
import palette from '../theme/theme';
import { t } from 'i18next';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useResponsive from '../hooks/useResponsive';

export default function HomePage() {
  const isDesktop = useResponsive('up', 'sm');
  const isTablet = useResponsive('only', 'sm');
  
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
        </Grid>
      </Grid>
    );
  } else if (isTablet) {
    return (
      <Stack direction="column" alignItems="center">
        <Box
          component="img"
          alt="character"
          src="/src/assets/character.svg"
          loading='lazy'
          sx={{
            width: '80%',
            height: 'auto',
            maxWidth: '80%',
            maxHeight: '50%',
          }}
        />
        <Stack direction="column" textAlign="initial" sx={{ width: '90%' }}>
          <Typography
            variant="h5"
            sx={{
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              color: palette.primary,
              mt: 2,
            }}
          >
            {t('home.lastName')}
          </Typography>
          <Stack direction="row" alignItems="center">
            <Typography
              variant="h5"
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
              variant="h5"
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
          <Divider
            sx={{
              borderBottomWidth: 2,
              color: palette.secondary,
              my: 2,
            }}
          />
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            mt={2}
          >
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
          <Stack mt={2}>
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
              variant="h5"
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
      </Stack>
    );
  } else {
    return (
      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ marginTop: '5vh' }}>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Box component="img" alt="character" src="/src/assets/character.svg" loading='lazy' sx={{ width: '80%', height: 'auto', maxWidth: '80%', maxHeight: '80%' }} />
        </Grid>
        <Grid item xs={12}>
          <Stack direction="column" alignItems="center">
            <Typography variant="h5" sx={{ fontStyle: 'normal', fontWeight: 700, lineHeight: 'normal', color: palette.primary, mt: 2 }}>
              {t('home.lastName')}
            </Typography>
            <Stack direction="row" alignItems="center">
              <Typography variant="h5" sx={{ fontStyle: 'normal', fontWeight: 700, lineHeight: 'normal', color: palette.primary }}>
                {t('home.name')}
              </Typography>
              <Typography variant="h5" sx={{ fontStyle: 'normal', fontWeight: 700, lineHeight: 'normal', color: palette.secondary }}>
                .
              </Typography>
            </Stack>
            <Divider sx={{ borderBottomWidth: 2, color: palette.secondary, my: 2 }} />
            <Stack direction="row" justifyContent="center" alignItems="center" mt={2}>
              <Link href="mailto:a.landre@proxiad.com" sx={{ textDecoration: 'none', alignItems: 'center', border: `3px solid`, color: palette.secondary, px: 1 }}>
                <Stack direction="row" alignItems="center" whiteSpace="nowrap">
                  <Typography sx={{ color: palette.secondary, fontStyle: 'normal', fontWeight: 700, lineHeight: 'normal', p: 1, textTransform: 'uppercase' }}>
                    {t('home.contactMe')}
                  </Typography>
                  <ArrowForwardIcon />
                </Stack>
              </Link>
            </Stack>
            <Stack mt={2}>
              <Typography variant="body1" sx={{ fontStyle: 'normal', fontWeight: 700, lineHeight: 'normal', color: palette.secondary, textTransform: 'uppercase', m: 1 }}>
                {t('home.introduction')}
              </Typography>
            </Stack>
            <Stack direction="row" width="20px">
              <Typography variant="h5" sx={{ fontStyle: 'normal', fontWeight: 700, lineHeight: 'normal', color: palette.primary, m: 1 }}>
                {t('home.job')}
              </Typography>
            </Stack>
            <Link href="/about" sx={{ textDecorationLine: 'none', color: palette.secondary }}>
              <Stack direction="row" alignItems="center">
                <Typography variant="body2" sx={{ fontStyle: 'normal', fontWeight: 600, lineHeight: 'normal', p: 1, m: 0 }}>
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
}
