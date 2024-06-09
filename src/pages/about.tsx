import { Typography, Grid, Container, Stack, Divider, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import palette from '../theme/theme';
import '../theme/highlight.css';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <Container
      sx={{
        height: '100vh',
        overflowY: 'auto',
        position: 'relative',
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} mt={1}>
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
                maxHeight: { xs: 70, md: 50, sm: 30 },
                maxWidth: { xs: 70, md: 50, sm: 30 },
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
                fontSize: { xs: '1.5em', sm: '1.5rem', md: '2.5rem' },
              }}
              dangerouslySetInnerHTML={{ __html: t('about.description') }}
            />
          </Stack>
          <Box
            component="img"
            loading="lazy"
            sx={{
              maxHeight: { xs: 70, md: 50, sm: 30 },
              maxWidth: { xs: 70, md: 50, sm: 30 },
              color: palette.primary,
              transform: 'scaleX(-1)',
              marginLeft: 'auto',
              marginRight: 0,
              display: 'flex',
            }}
            src="/src/assets/quote_mark.svg"
          />


        </Grid>
      </Grid>
    </Container>
  );
}
