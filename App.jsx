import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css'
import Dashboard from './Pages/Dashboard'
import InventoryAdd from './Pages/InventoryAdd'
import NewProduct from './Pages/NewProduct';
import OrderSummary from './Pages/OrderSummary';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/inventoryadd' element={<InventoryAdd/>}/>
          <Route path='/newproduct' element={<NewProduct/>}/>
          <Route path='/orders' element={<OrderSummary/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
