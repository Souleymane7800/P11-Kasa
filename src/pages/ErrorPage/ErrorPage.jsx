/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/errorPage.scss';
import Header from '../../components/Header/Header';
import MainContent from '../../layout/MainContent/MainContent';
import Footer from '../../layout/Footer/Footer';

export default function ErrorPage() {
      return (
            <>
                  <MainContent>
                        <Header />
                        <div className='error-page'>
                              <div>
                                    <h1>404</h1>
                                    <div className='error-message'>
                                          <p>Oups! La page que</p>
                                          <p>vous demandez n'existe pas.</p>
                                    </div>
                              </div>
                              <Link to='/'>
                                    Retourner sur la page d'accueil
                              </Link>
                        </div>
                  </MainContent>
                  <Footer />
            </>
      );
}
