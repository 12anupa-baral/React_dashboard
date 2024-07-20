import React from 'react';
import styles from './card.module.scss';

function Card({ children, cardClass }) {
  return (
    <div className={`${styles.Card} ${cardClass}`}>
      {children}
    </div>
  );
}

export default Card;
