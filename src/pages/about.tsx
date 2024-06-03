import { Typography, Grid, Container, Stack, Divider, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import palette from '../theme/theme';
import useResponsive from '../hooks/useResponsive';
import '../theme/highlight.css';

export default function AboutPage() {
  const { t } = useTranslation();
  const isDesktop = useResponsive('up', 'sm');

  return (
    <Container
      sx={{
        height: '100vh',
        overflowY: 'auto',
        position: 'relative',
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack>
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
            <Stack m={'auto'}>
              <Divider
                sx={{
                  width: '5vw',
                  color: palette.secondary,
                  border: '2px solid',
                }}
              />
            </Stack>
            <Box
              component="img"
              loading="lazy"
              sx={{
                maxHeight: { xs: 100, md: 50 },
                maxWidth: { xs: 100, md: 50 },
                color: palette.primary,
                mt: 4,
              }}
              src="/src/assets/quote_mark.svg"
            />
            <Typography
              variant="h4"
              sx={{
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal',
                color: palette.primary,
              }}
              dangerouslySetInnerHTML={{ __html: t('about.description') }}
            />
          </Stack>
          <Box
            component="img"
            loading="lazy"
            sx={{
              maxHeight: { xs: 100, md: 50 },
              maxWidth: { xs: 100, md: 50 },
              color: palette.primary,
              transform: 'scaleX(-1)',
              marginLeft: 'auto',
              marginRight: 0,
              display: "flex"
            }}
            src="/src/assets/quote_mark.svg"
          />
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
