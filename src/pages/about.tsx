import { Typography, Grid, Container, Stack, Divider, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import palette from '../theme/theme';
import '../theme/highlight.css';
import { useEffect } from 'react';
import quoteMark from '../assets/quote_mark.svg';

export default function AboutPage() {
  const { t } = useTranslation();

  useEffect(() => {
        document.title = `${t('menu.about')}`;
    }, [t]);

  return (
    <Container
      sx={{
        height: '100dvh',
        overflowY: 'auto',
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
                  width: '10vw',
                  color: palette.secondary,
                  border: '2px solid',
                }}
              />
            </Stack>
            
            <Box
              component="img"
              loading="lazy"
              sx={{
                maxHeight: { xs: 70, md: 50, sm: 60 },
                maxWidth: { xs: 70, md: 50, sm: 60 },
                color: palette.primary,
                mt: 4,
              }}
              src={quoteMark}
            />
            <Typography
              variant="h4"
              sx={{
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal',
                color: palette.primary,
                fontSize: { xs: '1.5em', sm: '2rem', md: '2.5rem' },
              }}
              dangerouslySetInnerHTML={{ __html: t('about.description') }}
            />
          </Stack>
          <Box
            component="img"
            loading="lazy"
            sx={{
              maxHeight: { xs: 70, md: 50, sm: 60 },
              maxWidth: { xs: 70, md: 50, sm: 60 },
              color: palette.primary,
              transform: 'scaleX(-1)',
              marginLeft: 'auto',
              marginRight: 0,
              display: 'flex',
            }}
            src={quoteMark}
          />


        </Grid>
      </Grid>
    </Container>
  );
}
