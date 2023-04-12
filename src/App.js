import React from 'react';
import './style/App.css';
import Switch from './components/switch/Switch';
import Title from './components/title/Title';
import MainInput from './components/inputs/main-input/MainInput';
import List from './components/list/List';
import TotalPrice from './components/total-price/TotalPrice';
import Confirm from './components/modal-windows/confirm/Confirm';
import Information from './components/modal-windows/information/Information';

function App() {
  return (
    <div className='app'>
      <Switch textLabel='DM' />
      <Title />
      <MainInput />
      <List />
      <TotalPrice totalPriceValue='0' />
      <Confirm confirmText='Delete all list?' />
      <Information />
    </div>
  );
}

export default App;
