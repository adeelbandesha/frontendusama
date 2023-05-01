import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Catigaries from './pages/Catigaries'
import SubCatigaries from './pages/SubCatigaries'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Offers from './pages/Offers';
import React from 'react';
import Error from './pages/Error';
import About from './pages/About';
import Contact from './pages/Contact';
import Payment from './pages/Payment';
import SelectPackage from './pages/SelectPackage';
import Noservice from './pages/Noservice'
import AdminDashboard from './pages/AdminPanel';
import AdminLogin from './pages/AdminLogin';
import Otp from './pages/Otp';
import ForgotPassword from './pages/ForgotPassword';

  
export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/offers/package/:packagename' element={ <SelectPackage /> } />
        <Route path='/offers/package/:packagename/payment' element={ <Payment /> } />
        <Route path='/' element={ <Home /> } />
        <Route path='/category/:category' element={ <Catigaries /> } />
        <Route path='/category/:category/service/:subcategory' element={ <SubCatigaries /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/forget' element={ <ForgotPassword /> } />
        <Route path='/signup' element={ <Signup />} />
        <Route path='/offers' element={ <Offers />} />
        <Route path='/about' element={ <About />} />
        <Route path='/contact' element={ <Contact />} />
        <Route path='/noservice' element={ <Noservice />} />
        <Route path='/otp' element={ <Otp />} /> 
        <Route path='/admin/dashboard' element={ <AdminDashboard />} />
        <Route path='/admin/login' element={ <AdminLogin />} />
        <Route path='*' element={ <Error /> } />
      </Routes>
      </BrowserRouter> 
    </div>
  );
}
