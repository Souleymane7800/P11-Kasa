// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import '../../styles/pages/logement.scss';
import datas from '../../data/data.json';
import { useParams } from 'react-router-dom';

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
            <>
                  <div>{idLogement}</div>;
                  <div>{currentLogement[0].pictures}</div>
                  <div>{currentLogement[0].description}</div>
            </>
      );
}
