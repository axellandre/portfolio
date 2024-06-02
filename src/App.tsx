import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next'; // Importez I18nextProvider
import i18n from './locales/i18n'; // Importez votre configuration i18n
import './App.css';
import Layout from './layouts/Layout';
import AboutPage from './pages/about';
import ErrorPage from './pages/error';
import HomePage from './pages/home';

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
    <I18nextProvider i18n={i18n}> 
      <RouterProvider router={router} />
    </I18nextProvider>
  );
}
