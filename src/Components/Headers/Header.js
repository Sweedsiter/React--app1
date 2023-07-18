import React from 'react'
import '../Headers/Header.css'


function Header({settat}) {

  return (
    <div>
        <header className="App-header">   
          <div className='heat-logo'>Logo</div>       
          <div className='heat-R'>
          <input type='text' placeholder='ค้นหาข้อมูลของเรา' onChange={(even)=>{settat(even.target.value)}} />
          <li onClick={()=>{settat("")}}>Home</li>                   
        </div>      
      </header>
    </div>
  )
}

export default Header