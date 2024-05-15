// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../../styles/components/slideShow.scss';
import aboutBanner from '../../assets/background.jpg';

export default function SlideShow(props) {
      const pictures = props.pictures;

      const [currentPicture, setCurrentPicture] = useState(0);

      const getClassNameImg = (index) => {
            if (index === currentPicture) return 'show';
            return '';
      };

      // Flèche suivante
      const moveToNext = () => {
            setCurrentPicture((currentPicture + 1) % pictures.length);
      };

      // Flèche précédente et retour à la photo 1
      const moveToPrevious = () => {
            const newCurrentPicture = currentPicture - 1;
            if (newCurrentPicture < 0) {
                  setCurrentPicture(pictures.length - 1);
                  return;
            }
            setCurrentPicture(currentPicture - 1);
      };

      const isPicturesAvailable = () => {
            return pictures && pictures.length > 0;
      };

      // Carousel ou image par défaut
      const getCarouselorImgDefault = () => {
            if (!isPicturesAvailable()) {
                  return (
                        <img
                              src={aboutBanner}
                              alt='image banner'
                              className='show'
                        />
                  );
            }
            return pictures.map((pic, index) => (
                  <img
                        key={pic}
                        src={pic}
                        alt=''
                        className={getClassNameImg(index)}
                  ></img>
            ));
      };

      return (
            <div className='image__banner_img'>
                  <div className='image__container'>
                        {/* Condition carousel: nombre de photos et flèches */}
                        {getCarouselorImgDefault()}
                  </div>
                  {isPicturesAvailable() && (
                        <>
                              {props.numberPhotos > 1 ? (
                                    <button
                                          id='button'
                                          className='btn btn-previous'
                                          onClick={moveToPrevious}
                                    >
                                          <i className='fas fa-chevron-left'></i>
                                    </button>
                              ) : (
                                    <span></span>
                              )}

                              {props.numberPhotos > 1 ? (
                                    <span className='slide__counter'>
                                          {currentPicture + 1} /{' '}
                                          {pictures.length}
                                    </span>
                              ) : (
                                    <span></span>
                              )}

                              {props.numberPhotos > 1 ? (
                                    <button
                                          className='btn btn-next'
                                          onClick={moveToNext}
                                    >
                                          <i className='fas fa-chevron-right'></i>
                                    </button>
                              ) : (
                                    <span></span>
                              )}
                        </>
                  )}
            </div>
      );
}
