import React, {useState} from 'react';
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
  const [isConfirmActive, setIsConfirmActive] = useState('');
  const [isInformationActive, setIsInformationActive] = useState('');
  const [information, setInformation] = useState({text: '', value: ''});

  return (
    <ContextApp.Provider
      value={{
        items,
        setItems,
        theme,
        setTheme,
        isConfirmActive,
        setIsConfirmActive,
        isInformationActive,
        setIsInformationActive,
        information,
        setInformation,
      }}
    >
      <div className={`app ${theme}`}>
        <div className='content'>
          <Switch textLabel='DM' />
          <Title />
          <MainInput />
          <List />
          <TotalPrice totalPriceValue='0' />
          <Confirm confirmText='Delete all list?' />
          <Information />
        </div>
      </div>
    </ContextApp.Provider>
  );
}

export default App;
