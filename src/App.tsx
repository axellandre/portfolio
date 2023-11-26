import { RouterProvider, createBrowserRouter } from 'react-router-dom';
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
    <>
      <RouterProvider router={router} />
    </>
  );
}
