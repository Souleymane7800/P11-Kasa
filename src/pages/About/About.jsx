// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../../styles/pages/about.scss';
import aboutData from '../../data/aboutData.json';
import Collapse from '../../components/Collapse/Collapse';
import SlideShow from '../../components/SlideShow/SlideShow';

export default function About() {
      return (
            <>
                  <div className='about__img'>
                        <SlideShow />
                  </div>
                  <div className='about__container'>
                        {aboutData.map((data) => {
                              return (
                                    <div
                                          key={data.id}
                                          className='collapse__panel'
                                    >
                                          <Collapse
                                                title={data.title}
                                                content={data.content}
                                          />
                                    </div>
                              );
                        })}
                  </div>
            </>
      );
}
