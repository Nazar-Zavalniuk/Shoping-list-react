import React, {useContext} from 'react';
import './TotalPrice.css';
import {ContextApp} from '../../context/ContextApp';

function TotalPrice(props) {
  const {theme} = useContext(ContextApp);

  return (
    <div className='total-price'>
      <div className={`total-price-text ${theme}`}>
        Total Price: {props.totalPriceValue}
      </div>
    </div>
  );
}

export default TotalPrice;
