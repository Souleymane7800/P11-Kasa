// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../../styles/pages/homePage.scss';
import Banner from '../../layout/Banner/Banner';
import Gallery from '../../components/Gallery/Gallery';

export default function HomePage() {
      return (
            <div className='home'>
                  <Banner />
                  <Gallery/>
              </div>
      );
}
