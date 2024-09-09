import React from 'react'
import './App.css'
import { AiFillClockCircle } from "react-icons/ai";
import Header from './Components/Header';
import Category from './Components/Category';
import TopRest from './Components/TopRest';
import OnlineDelivery from './Components/OnlineDelivery';
import Cusines from './Components/Cusines';
import Footer from './Components/Footer';

function App() {

  return (
    <>
    <Header/>
    <Category/>
    <TopRest/>
    <OnlineDelivery/>
    <Cusines/>
    <Footer/>
    </>
  )
}

export default App
