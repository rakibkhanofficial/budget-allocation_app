import React from 'react';
import './App.css';
import HeaderComponenet from './components/Header';
import BudgetTable from './components/BudgetTable';
import FooterComponent from './components/Footer';

function App() {
  return (
    <div className=' bg-white text-black '>
      <HeaderComponenet/>
      <BudgetTable/>
      <FooterComponent/>
    </div>
  );
}

export default App;
