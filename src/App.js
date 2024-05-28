import React from 'react'
import Header from './Header/Header'
import Navbar from './NaveBar/Navbar'
import Card from './Card/Card';
import './App.css'
import Graph from './Graph/Graph';
import { Chart } from 'chart.js';
import ChartGraph from './Graph/ChartGrph';
import BasickBackit from './BasiceBackit/BasickBackit';


const App = () => {
  return (
    <div className='App'>

    <div>
      <Header/>
      <Navbar/>
      <Card/>
      <div className='graph'>

      <Graph/>
      
      <ChartGraph/>
      </div>
      <div className='Backit'>

      <BasickBackit/>
      </div>
     
    </div>
    
    </div>
  )
}

export default App