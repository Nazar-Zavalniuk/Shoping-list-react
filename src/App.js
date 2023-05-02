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
        prices.push(parseFloat(item.price));
      }
    });

    function addFractions(fractions) {
      // Сonvert fractions to whole numbers
      const convertedFractions = fractions.map((f) => f * 100);

      // Add integers and convert back to fractions
      const sum = convertedFractions.reduce((acc, val) => acc + val, 0) / 100;

      const roundedSum = sum.toFixed(2);

      return roundedSum;
    }

    setTotalPrice(addFractions(prices));
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
