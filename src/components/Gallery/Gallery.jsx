// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../../styles/components/gallery.scss';
import datas from '../../data/data.json';
import Card from '../Card/Card';

export default function Gallery() {
      console.log(datas);
      return (
            <section className='home__gallery'>
                  {datas.map((data) => (
                        <Card
                              key={data.id}
                              id={data.id}
                              title={data.title}
                              cover={data.cover}
                        />
                  ))}
            </section>
      );
}
