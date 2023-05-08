import React, {useState} from 'react';
import {ContextApp} from '../ContextApp';

function AppStateProvider(props) {
  const [items, setItems] = useState([]);
  const [theme, setTheme] = useState('');
  const [isModalWindowActive, setIsModalWindowActive] = useState({
    information: {class: '', text: '', price: '', indexItem: null},
    confirm: '',
  });

  return (
    <ContextApp.Provider
      value={{items, setItems, theme, setTheme, isModalWindowActive, setIsModalWindowActive}}
    >
      {props.children}
    </ContextApp.Provider>
  );
}

export default AppStateProvider;
