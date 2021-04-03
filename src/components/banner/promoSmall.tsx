import React from 'react';

import './../../css/promoSmall.css';

import arrow from './../../images/arrow.svg';

export interface IPromoSmallProps {
  className: string;
  description: string;
  image?: any;
}

const PromoSmall: React.FC<IPromoSmallProps> = (props) => {
  console.log(props)
  return (
    <div className={props.className}>
      <p>{props.description}</p>
      <img src={arrow} alt="" />
    </div>
  )
}

export default PromoSmall;