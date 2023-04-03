import React from 'react';
import './TotalPrice.css';

function TotalPrice(props) {
  return (
    <div className='total-price'>
      <div className='total-price-text'>
        Total Price: {props.totalPriceValue}
      </div>
    </div>
  );
}

export default TotalPrice;
