import { Typography, Grid, Container, Stack, Divider } from '@mui/material';
import { t } from 'i18next';
import palette from '../theme/theme';
import AboutCard from '../components/about/AboutCard';
import useResponsive from '../hooks/useResponsive';

const aboutItems = [
  {
    key: 'design',
    title: t('about.design'),
    pathIcon: '/src/assets/design.svg',
  },
  {
    key: 'development',
    title: t('about.development'),
    pathIcon: '/src/assets/dev.svg',
  },
  {
    key: 'analysis',
    title: t('about.analysis'),
    pathIcon: '/src/assets/analysis.svg',
  },
];

export default function AboutPage() {
  const isDesktop = useResponsive('up', 'sm');

  return (
    <Container
      sx={{
        height: '100vh',
        overflowY: 'auto',
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              color: palette.secondary,
              m: 1,
            }}
          >
            {t('about.label')}
          </Typography>
        </Grid>
        {!isDesktop && (
          <Stack margin="auto" my={2}>
            <Divider
              sx={{
                width: '20vw',
                color: palette.primary,
                border: '2px solid',
              }}
            />
          </Stack>
        )}
        <Grid item xs={12}>
          <Typography
            variant="h3"
            sx={{
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              color: palette.primary,
            }}
          >
            {t('about.do')}
          </Typography>
        </Grid>
        {!isDesktop && (
          <Stack margin="auto" my={2}>
            <Divider
              sx={{
                width: '20vw',
                color: palette.secondary,
                border: '2px solid',
              }}
            />
          </Stack>
        )}
        <Grid item xs={12}>
          <Typography
            variant="h6"
            sx={{
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              color: palette.primary,
            }}
          >
            {t('about.experimented')}
          </Typography>
        </Grid>
        {aboutItems.map((item) => (
          <Grid
            item
            xs={!isDesktop ? 12 : 4}
            key={item.key}
            justifyContent="center"
          >
            <AboutCard
              title={item?.title}
              pathIcon={item?.pathIcon}
              backContent={{ description: 'dd', imageContent: 'e' }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
