import { Typography, Grid } from '@mui/material';
import { Stack, Box } from '@mui/system';
import { menuItems } from '../../routes/paths';
import {palette} from '../../theme/theme';
import { HashLink as Link } from 'react-router-hash-link';
import useResponsive from '../../hooks/useResponsive';
import { TFunction } from 'i18next';
import logoAcronym from '../../assets/logo_acronym.svg';
import logoMail from '../../assets/mail.svg';
import logoLinkedin from '../../assets/linkedin.svg';
import logoGithub from '../../assets/github.svg';

export default function DesktopHeader({ t }: { t: TFunction }) {
  const isDesktop = useResponsive('up', 'md');

  return (
    <>
      <Grid
        container
        direction="row"
        spacing={1}
        justifyContent="space-between"
        mt={1}
      >
        <Grid item xs={2}>
          <Link to="/home">
            <Box
              component="img"
              loading='lazy'
              sx={{
                maxHeight: { xs: 50, md: 50 },
                maxWidth: { xs: 50, md: 50 },
              }}
              alt=""
              src={logoAcronym}
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
                  transformOrigin: 'top left',
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
            <Link
              key={menuItem.path}
              to={menuItem.path}
              className={`nav-item ${menuItem.path === '/blog' ? 'disabled' : ''}`}
              style={{ pointerEvents: menuItem.path === '/blog' ? 'none' : 'auto', color: menuItem.path === '/blog' ? '#999' : palette.primary }}
            >
              <Typography
                variant="h6"
                fontWeight="700"
              >
                {t(menuItem.translationKey)}
              </Typography>
            </Link>
          ))}
          </Stack>
        </Grid>
        {isDesktop && (
          <Grid item xs={2}>
            <Stack
              direction="row"
              gap={{ md: 2, lg: 4 }}
              justifyContent="center"
              sx={{
                borderLeft: `3px solid`,
                color: palette.primary,
              }}
            >
              <Link smooth target="_blank" to={'mailto:a.landre@net.estia.fr'}>
                <Box
                  component="img"
                  width="30px"
                  loading='lazy'
                  alt="mail"
                  src={logoMail}
                />
              </Link>
              <Link
                target="_blank"
       
                to={"https://www.linkedin.com/in/axel-landr%C3%A9-083a43172/"}
              >
                <Box
                  component="img"
                  width="30px"
                  alt="linkedin"
                  loading='lazy'
                  src={logoLinkedin}
                />
              </Link>
              <Link target="_blank" to="https://github.com/axellandre">
                <Box
                  component="img"
                  loading='lazy'
                  width="30px"
                  alt="github"
                  src={logoGithub}
                />
              </Link>
            </Stack>
          </Grid>
        )}
      </Grid>
    </>
  );
}
