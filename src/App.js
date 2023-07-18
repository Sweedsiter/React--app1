import './App.css';
import Header from './Components/Headers/Header';
import Products from './Components/Products/Products';
import { useState } from 'react';
import iData from '../src/data/Data.js'
import Selet from './Components/Selet/Selet';


function App() {  
  const [Seletet,setSeletet]=useState(null)  
  const [settt,setSettt]=useState(null)
  let seletPost = null
    if(!!Seletet){
      seletPost = <Selet selet={Seletet} clossSelet={()=>setSeletet(null)}/>
    }    
 
  return (
    <div className="App">
      <Header iData={iData} settat={(even)=>{setSettt(even)}}/>
      <Products iData={iData} onSelet={setSeletet} settt={settt}/> 
      {seletPost}             
    </div>
  );
}

export default App;
