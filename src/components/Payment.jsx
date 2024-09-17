import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Payment = () => {
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate(`/orderlist`)
    }
   
  return (
    
    <div className='flex flex-col justify-center items-center m-3 h-90 border-2 rounded' >
        <div className=''>
        <p className='font-bold p-2 m-2 text-lg'>Payment Method</p>
        <form action="" className='m-2'>
                <input  className='m-1'type="radio" id="card" name="payment" value="card"/>
                <label  for="card">Credit or Debit card</label><br />
                <input className='m-1' type="radio" id="UPI" name="payment" value="UPI"/>
                <label for="UPI">UPI</label><br/>
                <input  className='m-1' type="radio" id="Cash" name="payment" value="Cash"/>
                <label for="cash">Cash on delivery</label>
        </form>  
        </div>
        <button className='bg-blue-200 m-2 p-2 rounded border-2 border-black' onClick={handleClick}>Place order</button>
    </div>
  )
}
