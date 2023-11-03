import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from './../Header/Cart/Cart';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();

    const [countCart, setCart] = useState([]);

    const handleAddToCart = (tShirt) =>{
         const newCart = [...countCart, tShirt];
         setCart(newCart);
    }
    return (
        <div className='home-container'>
            <div className='t-shirt-container'>
                {
                    tshirts.map(tShirt => <Tshirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt >)
                }
            </div>

            <div className='cart-container'>
               <Cart
                cart = {countCart}
               ></Cart>

          
            </div>
        </div>
    );
};

export default Home;