// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import '../../styles/pages/logement.scss';
import datas from '../../data/data.json';
import { useParams } from 'react-router-dom';
import Collapse from '../../components/Collapse/Collapse';
import SlideShow from '../../components/SlideShow/SlideShow';
import LogementHeader from '../../components/LogementHeader/LogementHeader';

export default function Logement() {
      const [image, setImage] = useState([]);
      console.log(image);
      const idLogement = useParams('id').id;
      const currentLogement = datas.filter((data) => data.id === idLogement);

      useEffect(() => {
            const currentLogement = datas.filter(
                  (data) => data.id === idLogement
            );
            setImage(currentLogement[0].pictures);
      }, [idLogement]);

      return (
            <div className='logement-page'>
                  <SlideShow
                        pictures={currentLogement[0].pictures}
                        numberPhotos={currentLogement[0].pictures.length}
                  />
                  <LogementHeader currentLogement={currentLogement[0]} />
                  <div className='logement__desc__area'>
                        <Collapse
                              title='Description'
                              content={currentLogement[0].description}
                        />
                        <Collapse
                              title='Équipements'
                              content={currentLogement[0].equipments.map(
                                    (eq, index) => (
                                          <li key={index}>{eq}</li>
                                    )
                              )}
                        />
                  </div>
            </div>
      );
}
