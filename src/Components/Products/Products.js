import React from 'react'
import './Products.css'

function Products(props) {
  const {iData,onSelet,settt}=props
  const filtersearch = iData.filter((Data)=>{
    // return Data.name.includes(settt)
    if(!settt){
        return Data
    }else{
      return Data.name.includes(settt)
    }
  })
  return (
    <div className='Products-box-main'>          
      {
        filtersearch.map((even,index)=>{
            return(
                <div className='Products-box' key={index}>
                       <img src={even.image} alt="" onClick={()=>{onSelet(even)}}></img>
                     <div className='context'>
                     <h2>{even.name}</h2>
                    <h4>{even.price}</h4>
                     <details>{even.dec}</details>
                 </div>
                </div>
            )            
        })
      }    
    </div>
  )
}

export default Products