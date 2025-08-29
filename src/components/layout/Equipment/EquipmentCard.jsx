import React from 'react';
import s from './Equipment.module.scss';

const EquipmentCard = ({ img, title }) => (
  <div className={s.card}>
    <div className={s.imgWrapper}>
      <img src={img} alt={title} />
    </div>
    <h6>{title}</h6>
  </div>
);

export default EquipmentCard;
