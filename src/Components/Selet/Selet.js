import React from 'react'
import './Selet.css'

function Selet({selet,clossSelet}) {
  return (
            <div className='Selet-box' onClick={clossSelet}>
                <div className='content'>
                <img src={selet.image} alt=""></img>
                     <div className='context'>
                       <h2>{selet.name}</h2>
                       <h4>{selet.price}</h4>
                       <details>{selet.dec}</details>
                    </div>
                </div>
            </div>
        )
}

export default Selet