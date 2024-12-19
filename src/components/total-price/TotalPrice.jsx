import React, {useState} from 'react';
import './TotalPrice.css';
import useAppState from '../../context/hook/useAppState';
import useCalcutateTotalPice from '../../hooks/useCalcutateTotalPice';
import classNames from 'classnames';

function TotalPrice(props) {
  const {theme, items} = useAppState();
  const [totalPrice, setTotalPrice] = useState('');
  const className = classNames('total-price-text', theme);

  useCalcutateTotalPice(items, setTotalPrice);

  return (
    <div className='total-price'>
      <div className={className}>Total Price: {totalPrice}</div>
    </div>
  );
}

export default TotalPrice;
