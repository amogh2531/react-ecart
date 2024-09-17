import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/Cartcontext';

export const Checkout = ({ cart }) => {
    const navigate = useNavigate()
    console.log(cart);
    
    const {setTotal} = useCart()
    const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

    const  handleOrder = () =>{
        setTotal(total)
        navigate("/shipping", {state: {total}})
    }
    return (
        <>
            <div className='flex flex-wrap justify-evenly items-center w-full '>
                {cart.map((item) => (
                    <div
                        key={item.id}
                        className='flex flex-col items-center w-[45%] bg-white p-2 m-2 bg-emerald-50 rounded border-slate-500 border-2'
                    >
                        <div className='h-50 w-full max-w-[150px]'>
                            <img
                                className='object-cover w-full h-full'
                                src={item.imgSrc}
                                alt={item.title}
                            />
                        </div>
                        <p className='font-semibold mt-2'>{item.title}</p>
                        <p className='font-bold mt-1'>₹{item.price}</p>
                    </div>
                    
                ))}
            </div>
            <div className='flex flex-col items-center justify-center m-3'>
              <p className='font-bold text-lg'>Total Price: ₹{total}</p>
              <button className='rounded bg-blue-300 p-2 px-3 text-center font-bold m-2' onClick={handleOrder}>Continue</button>
            </div>
        </>
    );
};
