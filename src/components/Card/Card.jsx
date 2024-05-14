// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../../styles/components/card.scss'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import de PropTypes

export default function Card({ id, title, cover }) {
      console.log(id);
      return (
            <Link to={`/logement/${id}`}>
                  <div className='card'>
                        <img src={cover} alt={title} className='card__image' />

                        <h3 className='card__subtitle'>{title}</h3>
                  </div>
            </Link>
      );
}

// Définition des types des props avec PropTypes
Card.propTypes = {
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired
};