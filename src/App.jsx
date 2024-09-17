import React, { useState } from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

import { CartProvider } from './context/Cartcontext'
import { ShippingProvider } from './context/ShippingContext'
import Navbar from './components/Navbar'
import Product from './components/Product'
import ProductDetail from './components/ProductDetail'
import SearchItem from './components/SearchItem'
import Cart from './components/Cart'
import { items } from './components/Data'
import { Checkout } from './components/Checkout'
import { Shipping } from './components/Shipping'
import { PlaceOrder } from './components/PlaceOrder'
import { Payment } from './components/Payment'
import { OrderDetails } from './components/OrderDetails'


const App = () => {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  return (
    <>
    <Router>
    <Navbar cart={cart} setData={setData} />
    <CartProvider>
    <ShippingProvider>
    <Routes>
      <Route path="/" element={<Product cart={cart} setCart={setCart} items={data} />} />
      <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
      <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart} />} />
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      <Route path="/cart/checkout" element={<Checkout cart={cart}/>} />
      <Route path='/shipping' element={<Shipping cart={cart}/>}/>
      <Route path="/order" element={<PlaceOrder/>} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="/orderlist" element={<OrderDetails/>} />

    </Routes>
    </ShippingProvider>
    </CartProvider>
    </Router>
    </>
  )
}

export default App