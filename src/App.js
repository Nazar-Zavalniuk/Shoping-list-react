/* global BigInt */
import React, {useEffect, useState} from 'react';
import './style/App.css';
import Switch from './components/switch/Switch';
import Title from './components/title/Title';
import MainInput from './components/inputs/main-input/MainInput';
import List from './components/list/List';
import TotalPrice from './components/total-price/TotalPrice';
import Confirm from './components/modal-windows/confirm/Confirm';
import Information from './components/modal-windows/information/Information';
import {ContextApp} from './context/ContextApp';

function App() {
  const [items, setItems] = useState([]);
  const [theme, setTheme] = useState('');
  const [isModalWindowActive, setIsModalWindowActive] = useState({
    information: {class: '', text: '', price: '', indexItem: null},
    confirm: '',
  });
  const [totalPrice, setTotalPrice] = useState('');

  useEffect(() => {
    const prices = [];

    items.forEach((item) => {
      if (item.marked.state && item.price !== '') {
        prices.push(item.price);
      }
    });

    function calculateTotalCost(prices) {
      const integerPart = [];
      const fractionalPart = [];

      prices.forEach((item) => {
        const [integer = '', fraction = ''] = item.split('.');
        integerPart.push(integer);

        // We round the fraction in advance so that at the moment when the user marks the product as assembled
        // and decides to edit the price, the already rounded fraction is included in the calculation
        if (fraction.length >= 2) {
          fractionalPart.push(fraction.slice(0, 2));
        } else if (fraction.length === 1) {
          fractionalPart.push(fraction + '0');
        }
      });

      const sumInteger = integerPart.reduce((acc, val) => acc + BigInt(val), 0n);
      const sumFractions = fractionalPart.reduce((acc, val) => acc + Number(val), 0);

      // Converted the sum of fractions to separate the integer part from the fractional
      const convertSumFractions = sumFractions / 100;

      // From the converted sum of fractions, separated the integer part from the fractional
      const [integer = '', fraction = ''] = String(convertSumFractions).split('.');

      // I add the sum of integers obtained from the original number and the integer obtained
      // as a result of adding the fractional parts of the original number,
      // convert the addition result into a string and add the fractional part
      // (depending on the sum of the fractional part, I round it up to hundredths by adding "0" to it).
      // If the fractional part is missing, I append ".00" to the end
      // so that the result displays the entire amount along with hundredths.
      if (fraction.length === 2) {
        return String(sumInteger + BigInt(integer)) + '.' + fraction;
      } else if (fraction.length === 1) {
        return String(sumInteger + BigInt(integer)) + '.' + fraction + '0';
      } else {
        return String(sumInteger + BigInt(integer)) + '.00';
      }
    }

    if (prices.length === 0) {
      setTotalPrice('0.00');
    } else {
      setTotalPrice(calculateTotalCost(prices));
    }
  }, [items]);

  return (
    <ContextApp.Provider
      value={{items, setItems, theme, setTheme, isModalWindowActive, setIsModalWindowActive}}
    >
      <div className={`app ${theme}`}>
        <div className='content'>
          <Switch textLabel='DM' />
          <Title />
          <MainInput />
          <List />
          <TotalPrice totalPriceValue={totalPrice} />
          <Confirm confirmText='Delete all list?' />
          <Information />
        </div>
      </div>
    </ContextApp.Provider>
  );
}

export default App;
