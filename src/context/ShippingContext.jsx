import React, { createContext, useContext, useState } from 'react';

const ShippingContext = createContext();

export const ShippingProvider = ({ children }) => {
    const [nam, setNam] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [pin, setPin] = useState("");

    return (
        <ShippingContext.Provider value={{ nam, setNam, address, setAddress, phone, setPhone, pin, setPin }}>
            {children}
        </ShippingContext.Provider>
    );
};

export const useShipping = () => {
    const context = useContext(ShippingContext)
    if(!context) {
        throw new Error('useShipping must be used within a ShippingProvider');
    } return context
}  