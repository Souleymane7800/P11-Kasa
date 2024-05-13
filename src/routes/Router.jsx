// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import About from '../pages/About/About';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Logement from '../pages/Logement/Logement';
import Header from '../components/Header/Header';
import MainContent from '../layout/MainContent/MainContent';
import Footer from '../layout/Footer/Footer';

const HeaderFooterLayout = () => {
      return <>
                  <Header />
                  <MainContent>
                        <Outlet />
                  </MainContent>
                  <Footer />
            </>
      
};

export const router = createBrowserRouter([
      {
            element: <HeaderFooterLayout />,
            errorElement: <ErrorPage />,
            children: [
                  {
                        path: '/',
                        element: <HomePage />,
                  },
                  {
                        path: '/logement/:id',
                        element: <Logement />,
                  },
                  {
                        path: '/about',
                        element: <About />,
                  },
            ],
      },
]);
