import React, { useState } from 'react';
import { useShipping } from '../context/ShippingContext';
import { useNavigate } from 'react-router-dom';

export const Shipping = () => {
    const navigate = useNavigate()
    const { nam, setNam, address, setAddress, phone, setPhone, pin, setPin } = useShipping();

    // Initialize form data with context values
    const [formData, setFormData] = useState({
        nam: nam || '',
        address: address || '',
        phone: phone || '',
        pin: pin || ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });


        // Update context values
        if (name === 'nam') {
            setNam(value);
        } else if (name === 'address') {
            setAddress(value);
        } else if (name === 'phone') {
            setPhone(value);
        } else if (name === 'pin') {
            setPin(value);
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form Data Submitted:', formData);
        navigate('/order', { state: { formData } });
    };

    return (
        <div className='flex flex-col justify-center items-center p-4 m-2 border-2 border-black rounded'>
            <p className='font-bold m-2 p-2 text-lg'>Enter your shipping details</p>
            <form onSubmit={handleSubmit} className='w-full max-w-md'>
                {["nam", "address", "phone", "pin"].map((value, index) => (
                    <div key={index} className='p-2 flex items-center flex-col'>
                        <label htmlFor={value} className='mb-1'>
                            {value === "nam" ? "Name" : value[0].toUpperCase() + value.slice(1)}
                        </label>
                        <input
                            className='m-1 border-2 text-center bg-blue-200 p-2 rounded'
                            type={value === 'phone' ? 'tel' : 'text'}
                            id={value}
                            name={value} 
                            value={formData[value]} 
                            placeholder={`Enter ${value[0].toUpperCase() + value.slice(1)} here`}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <div className='flex items-center justify-center'>
                    <button
                        className="bg-red-200 p-2 rounded m-2 font-bold"
                        type='submit'
                    >
                        Place Order
                    </button>
                </div>
            </form>
        </div>
    );
};
