import React from 'react';
import '../../styles/components/logementHeader.scss';

export default function LogementHeader({ currentLogement }) {
      console.log(currentLogement);
      // Split du nom
      const name = currentLogement.host.name.split(' ');
      const rating = currentLogement.rating;

      return (
            <section className='logement__header'>
                  <div className='logement__title'>
                        <h1>{currentLogement.title}</h1>
                        <p>{currentLogement.location}</p>
                        <div className='logement__tags'>
                              {currentLogement.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                              ))}
                        </div>
                  </div>
                  <div className='logement__owner'>
                        <div className='logement__owner__details'>
                              <h3>
                                    <span>{name[0]}</span>
                                    <span>{name[1]}</span>
                              </h3>
                              <div className='logement__owner__badge'>
                                    <img src={currentLogement.host.picture} />
                              </div>
                        </div>
                        <div className='logement__owner__stars'>
                              {[1, 2, 3, 4, 5].map((num) => (
                                    <span
                                          key={num}
                                          className={
                                                currentLogement.rating >= num
                                                      ? 'on'
                                                      : ''
                                          }
                                    >
                                          ★
                                    </span>
                              ))}
                        </div>
                  </div>
            </section>
      );
}
