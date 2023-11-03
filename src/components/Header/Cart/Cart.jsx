import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h2>Order summary:{cart.length}</h2>

            {
                cart.map(eachTShirt => <p>{eachTShirt.name}</p>)
            }
        </div>
    );
};

export default Cart;