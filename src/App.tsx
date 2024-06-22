import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next'; 
import i18n from './locales/i18n'; 
import './App.css';
import Layout from './layouts/Layout';
import AboutPage from './pages/about';
import ErrorPage from './pages/error';
import HomePage from './pages/home';
import { LanguageProvider } from './layouts/context/LanguageProvider';
import ProjectsPage from './pages/projects';

export default function App() {
  const routerConfig = [
    {
      path: '/',
      element: <Layout />,
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
          path: 'projects',
          element: <ProjectsPage />,
        },
        {
          path: '*',
          element: <ErrorPage />,
        },
               {
          path: '/',
          element: <HomePage />,
        }
      ],
    },
  ];

  const router = createBrowserRouter(routerConfig);

  return (
    <LanguageProvider>
      <I18nextProvider i18n={i18n}> 
        <RouterProvider router={router} />
      </I18nextProvider>
    </LanguageProvider>
  );
}
