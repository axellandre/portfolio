import {
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { TFunction, changeLanguage} from 'i18next';
import palette from '../../theme/theme';
import { Fragment, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { menuItems } from '../../routes/paths';
import logoMenu from '../../assets/menu.svg';
import logoAcronym from '../../assets/logo_acronym.svg';
import language from '../../assets/languages.svg';
import frFlag from '../../assets/fr_flag.svg';
import enFlag from '../../assets/en_flag.svg';

type Anchor = 'left';

export default function MobileHeader({ t }: { t: TFunction }) {
  const [state, setState] = useState({
    left: false,
  });
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (language: string) => {
  changeLanguage(language); 
  setAnchorEl(null);
};

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: palette.primary,
        color: palette.tertiary,
      }}
    >
      <List>
        <Stack direction="row" justifyContent="space-between" m={2}>
          <Typography variant="h5" fontWeight="700">
            {t('menu.label')}
          </Typography>
          <CloseIcon />
        </Stack>
      </List>
      <Divider
        sx={{
          width: '88vw',
          mx: 3,
          color: palette.white,
          border: '1px solid',
        }}
      />
      <List sx={{ml: 2, mt: 2}}>
        {menuItems.map((menuItem) => (
     <Link
            key={menuItem.path}
            to={menuItem.path}
            className={`nav-item ${menuItem.path === '/blog' ? 'disabled' : ''}`}
            style={{
              pointerEvents: menuItem.path === '/blog' ? 'none' : 'auto',
              color: menuItem.path === '/blog' ? '#999' : palette.white,
                  }}
          >
              <Typography
                variant="h5" 
                fontWeight="400"
                sx={{ color : menuItem.path === '/blog' ? '#999' : palette.white, mb: 3 }}
              >
                {t(menuItem.translationKey)}
              </Typography>
            </Link>
          ))}
      </List>
    </Box>
  );
  return (
    <>
      <Grid container>
        <Grid item xs={3}>
          {(['left'] as const).map((anchor) => (
            <Fragment key={anchor}>
              <IconButton
                size="large"
                onClick={toggleDrawer(anchor, true)}
                sx={{ color: palette.primary }}
              >
                <Box
                  component="img"
                  alt="character"
                  loading='lazy'
                  src={logoMenu}
                />
              </IconButton>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </Fragment>
          ))}
        </Grid>
        <Grid item xs={6}>
          <Link to="/home">
            <Box
              component="img"
              loading='lazy'
              sx={{
                maxWidth: { xs: 500, md: 50 },
                mt: 1,
              }}
              alt=""
              src={logoAcronym}
            />
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Fragment>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Tooltip title={t('account.language')}>
                <IconButton
                  onClick={handleClick}
                  size="large"
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Box
                    component="img"
                    alt="character"
                    loading='lazy'
                    src={language}
                    sx={{ ml: 3 }}
                  />
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={() => setAnchorEl(null)} 
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 0.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 25,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={() => handleClose('fr')}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <ListItemIcon>
                    <Box
                      component="img"
                      alt="fr_flag"
                      loading='lazy'
                      src={frFlag}
                      sx={{
                        filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.32))',
                      }}
                    />
                  </ListItemIcon>
                  <Typography
                    textTransform="uppercase"
                    variant="h6"
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: 'normal',
                      color: palette.primary,
                    }}
                  >
                    {t('menu.fr')}
                  </Typography>
                </Stack>
              </MenuItem>
              <MenuItem onClick={() => handleClose('en')}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <ListItemIcon>
                    <Box
                      component="img"
                      alt="en_flag"
                      src={enFlag}
                      loading='lazy'

                      sx={{
                        filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.32))',
                      }}
                    />
                  </ListItemIcon>
                  <Typography
                    textTransform="uppercase"
                    variant="h6"
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: 'normal',
                      color: palette.primary,
                    }}
                  >
                    {t('menu.en')}
                  </Typography>
                </Stack>
              </MenuItem>
            </Menu>
          </Fragment>
        </Grid>
      </Grid>
    </>
  );
}
