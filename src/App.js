import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search/AutoComplete';

function App() {
  const ProgLang = [
    'Maçã R$ 3,00',
    'Arroz R$ 25,50',
    'Feijão R$ 19,99',
    'Picanha R$ 48,90',
    'Salmão R$ 95,00',
    'Maçã R$ 2,50',
    'Arroz R$ 32,00',
    'Feijão R$ 27,00',
    'Picanha R$ 65,90',
    'Salmão R$ 120,00',
  ];
  return (
    <div className="container">
      <Search />
    </div>
  );
}

export default App;
