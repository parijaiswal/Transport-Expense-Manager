import React from 'react';
import MainPage from './Pages/MainPage';
import AddExpense from './Pages/expenseDashboard/AddExpense';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import ViewExp from './pages/expenseDashboard/ViewExp';
import Home from './Pages/Home';
function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}>
            <Route index element={<Home/>}/>
            <Route path="addexp" element={<AddExpense/>}/>
            <Route path="viewExp" element={<ViewExp/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
      
  );
}

export default App
