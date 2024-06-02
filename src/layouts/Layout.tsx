import { Outlet } from 'react-router-dom';
import Header from '../layouts/header/Header';
import useSmoothScroll from '../hooks/useSmoothScroll';
import { Stack } from '@mui/material';
import palette from '../theme/theme';
import Footer from '../layouts/footer/Footer'; 

export default function Layout() {
  useSmoothScroll();

  return (
    <Stack
      sx={{
        flexDirection: 'column',
        backgroundColor: palette.tertiary,
      }}
    >
      <Stack my={2} zIndex={1}>
        <Header />
      </Stack>
      <Stack id="main-content" flex={1} zIndex={0}>
        <Outlet />
      </Stack>
      <Stack>
        <Footer /> 
      </Stack>
    </Stack>
  );
}
