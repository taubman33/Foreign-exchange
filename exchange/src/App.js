import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios'
import './App.css';

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Sider from './components/Sider'

import HeaderCalculator from './components/HeaderCalculator'
import SiderCalculator from './components/SiderCalculator'
import MainCalculator from './components/MainCalculator'



function App() {

  const [currencies, setCurrencies] = useState('')  
  const [selector1, setSelector1] = useState('USD')
  const [selector2, setSelector2] = useState('EUR')
  const [calcResult, setCalcResult] = useState(calculator())
  const [theInput, setTheInput] = useState(1) 


  function changeCurrency(e) {
    const coin = e.currentTarget.dataset.name.toUpperCase()

    let url = `https://api.exchangeratesapi.io/latest?base=${coin}`
    axios.get(url)
      .then(res => {
        setCurrencies(res.data)
        console.log(res.data)
      })
  }

// This gets the data from the drop down menu, and sets it to coin1
  function selectorA(e) {    
    const coin1 = e.currentTarget.value  
    // console.log(coin1)

  setSelector1(coin1)
    calculator()
    setCurrencies(null)
  }

  function selectorB(e) {
    const coin2 = e.currentTarget.value  
    console.log(coin2)

    setSelector2(coin2)
    calculator()
    setCurrencies(null)  // we set all the currencies to null, so they wont appear on the screan, once they are selected
  }

  //sets the currencies - USD and EURO and runs the calculator function
  function clickSubmit() {
    setCurrencies(null) 
    calculator()
  }
 
  //this function will get the first selected and the second one
  function calculator() {
    // e.preventDefault()
    let url = `https://api.exchangeratesapi.io/latest?base=${selector1}&symbols=${selector2}`  
    axios.get(url) // axios will get the data in the API
      .then(res => { 
        setCalcResult(theInput * res.data.rates[selector2]) 
        // console.log(res.data.rates)
        // console.log(res.data.rates[selector2])
        // console.log(theImput * res.data.rates[selector2])



      })
  }

    // function to calculate the number in the imput to submit
    function updateTheVolumeOfCurrency(e) {  // we take that event, and put the current value in 'headerInput
    const headerInput = e.currentTarget.value
   

    //sets default if input is not truthy
    if (headerInput === '' || headerInput === undefined || headerInput === null || isNaN(headerInput)) {
      setTheImput(1)
    } else {
      setTheImput(headerInput)
      calculator()
      setCurrencies(null) //we set currencies to null, so they got erase from render
    }
  }




  return (
    <div className="App">
  
        <div className="app-Header"style={{positon:"fixed", top:"0"}}>
        <Header />
        </div>

        <div className="app-Main">
          <Main />
        </div>


        <div className="app-Footer" style={{positon:"fixed", bottom:"0"}}>
        <Footer />
        </div>
      
    </div>
  );
}

export default App;
