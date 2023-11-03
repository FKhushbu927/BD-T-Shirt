import React from 'react';
import './Tshirt.css'

const Tshirt = ({ tShirt, handleAddToCart }) => {

    const { picture, name, price } = tShirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>${price}</p>
            <button onClick={() => handleAddToCart(tShirt)}>Buy now</button>



        </div>
    );
};

export default Tshirt;