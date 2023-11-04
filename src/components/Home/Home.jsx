import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from './../Header/Cart/Cart';
import './Home.css';
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();

    const [countCart, setCart] = useState([]);

    const handleAddToCart = (tShirt) =>{
        const exists = countCart.find(ts => ts._id === tShirt._id);
        if(exists){
             toast('you have already added this! ');
        }else{
            const newCart = [...countCart, tShirt];
            setCart(newCart);
        }
         
        
    }

    const handleRemoveFromCart = (id)=> {
       const remaining = countCart.filter(ts => ts._id !== id);
       setCart(remaining);
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
                handleRemoveFromCart = { handleRemoveFromCart }
               ></Cart>

          
            </div>
        </div>
    );
};

export default Home;