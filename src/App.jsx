import React from 'react';
import MainPage from './Pages/MainPage';
import AddExpense from './Pages/expenseDashboard/AddExpense';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/addExpense" element={<AddExpense/>}/>
        </Routes>
    </BrowserRouter>
      
  );
}

export default App
