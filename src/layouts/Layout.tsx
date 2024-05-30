import { Outlet, useLocation } from 'react-router-dom';
import Header from './header/Header';
import HomePage from '../pages/home';
import { Stack } from '@mui/material';
import palette from '../theme/theme';

export default function Layout() {
  const { pathname } = useLocation();
  const isErrorPage = pathname === '/error';
  const createdPagePaths = ['/home', '/about', '/blog', 'projects'];
  const isCreatedPage = createdPagePaths.includes(pathname);

  return (
    <>
      <Stack
        sx={{
          flexDirection: 'column',
          backgroundColor: palette.tertiary,
        }}
      >
        {!isErrorPage && isCreatedPage && (
          <Stack my={2} zIndex={1}>
            <Header />
          </Stack>
        )}
        <Stack flex={1} zIndex={0}>
          {isErrorPage ? <HomePage /> : <Outlet />}
        </Stack>
        <Stack>{/* <Footer /> */}</Stack>
      </Stack>
    </>
  );
}
