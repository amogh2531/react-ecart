import React from 'react';
import { useCart } from '../context/Cartcontext';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const PlaceOrder = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { total } = useCart();
    
    const formData = location.state?.formData || {}; 

    const handleClick = () =>{
        navigate("/payment")
    }

    return (
        <div className='p-4 flex flex-col justify-center items-center'>
            <h2 className='text-xl font-bold mb-4'>Order Summary</h2>
            
            <div className='mb-4'>
                <h3 className='text-lg font-semibold'>Total Price: ₹{total}</h3>
            </div>
            
            <div>
                <h3 className='text-lg font-semibold mb-2'>Shipping Details:</h3>
                <p><strong>Name:</strong> {formData.nam || 'N/A'}</p>
                <p><strong>Address:</strong> {formData.address || 'N/A'}</p>
                <p><strong>Phone:</strong> {formData.phone || 'N/A'}</p>
                <p><strong>Pin Code:</strong> {formData.pin || 'N/A'}</p>
            </div>
            
            <div className='mt-4'>
                <button className='bg-blue-500 text-white p-2 rounded'
                        onClick={handleClick}
                >
                    Confirm Order
                </button>
            </div>
        </div>
    );
};
