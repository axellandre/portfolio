import { Typography, Grid, Container, Stack, Divider } from '@mui/material';
import { t } from 'i18next';
import palette from '../theme/theme';
import useResponsive from '../hooks/useResponsive';

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
      </Grid>
    </Container>
  );
}
