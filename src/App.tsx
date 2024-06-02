import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next'; 
import i18n from './locales/i18n'; 
import './App.css';
import Layout from './layouts/Layout';
import AboutPage from './pages/about';
import ErrorPage from './pages/error';
import HomePage from './pages/home';
import { LanguageProvider } from './layouts/context/LanguageProvider';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'home',
          element: <HomePage />,
        },
        {
          path: 'about',
          element: <AboutPage />,
        },
        {
          path: '*',
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return (
    <LanguageProvider>
    <I18nextProvider i18n={i18n}> 
      <RouterProvider router={router} />
    </I18nextProvider>
    </LanguageProvider>
  );
}
