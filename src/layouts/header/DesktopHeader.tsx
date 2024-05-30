import { Typography, Link, Grid } from '@mui/material';
import { Stack, Box } from '@mui/system';
import { t } from 'i18next';
import { menuItems } from '../../routes/paths';
import palette from '../../theme/theme';
import { NavLink } from 'react-router-dom';
import useResponsive from '../../hooks/useResponsive';

export default function DesktopHeader() {
  const isDesktop = useResponsive('up', 'md');

  return (
    <>
      <Grid
        container
        direction="row"
        spacing={3}
        justifyContent="space-between"
        mt={1}
      >
        <Grid item xs={2}>
          <Link href="/home">
            <Box
              component="img"
              sx={{
                maxHeight: { xs: 50, md: 50 },
                maxWidth: { xs: 50, md: 50 },
              }}
              alt=""
              src="/src/assets/logo_acronym.svg"
            />
          </Link>
        </Grid>
        <Grid item xs={8} direction="row">
          <Stack
            direction="row"
            justifyContent="flex-end"
            gap={5}
            sx={{
              mr: { xs: 20, sm: 15, md: 10, lg: 5 },
              '.nav-item': {
                position: 'relative',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: 3,
                  bottom: 0,
                  left: 0,
                  margin: '-5px 0',
                  backgroundColor: palette.primary,
                  visibility: 'hidden',
                  transform: 'scaleX(0)',
                  transformOrigin: ' top left',
                  transition: 'transform 0.2s ease',
                },
                '&:hover:before': {
                  visibility: 'visible',
                  transform: 'scaleX(1)',
                },
              },
            }}
          >
            {menuItems.map((menuItem) => (
              <NavLink
                key={menuItem.path}
                to={menuItem.path}
                className="nav-item"
              >
                <Typography
                  variant="h6"
                  fontWeight="700"
                  sx={{ color: palette.primary }}
                >
                  {t(menuItem.translationKey)}
                </Typography>
              </NavLink>
            ))}
          </Stack>
        </Grid>
        {isDesktop && (
          <Grid item xs={2}>
            <Stack
              direction="row"
              gap={3}
              justifyContent="center"
              sx={{
                borderLeft: `3px solid`,
                color: palette.primary,
              }}
            >
              <Link target="_blank" href="mailto:a.landre@proxiad.com">
                <Box
                  component="img"
                  width="30px"
                  alt="mail"
                  src="/src/assets/mail.svg"
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/axel-landr%C3%A9-083a43172/"
              >
                <Box
                  component="img"
                  width="30px"
                  alt="linkedin"
                  src="/src/assets/linkedin.svg"
                />
              </Link>
              <Link target="_blank" href="https://www.instagram.com/axel.lnd_/">
                <Box
                  component="img"
                  width="30px"
                  alt="instagram"
                  src="/src/assets/instagram.svg"
                />
              </Link>
            </Stack>
          </Grid>
        )}
      </Grid>
    </>
  );
}
