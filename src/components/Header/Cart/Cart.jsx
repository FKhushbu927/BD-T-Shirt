import React from 'react';

const Cart = ({cart,  handleRemoveFromCart}) => {
    return (
        <div>
            <h2>Order summary:{cart.length}</h2>

            {
                cart.map(eachTShirt => <p
                  key={eachTShirt._id}
                
                >  {eachTShirt.name} 
                    <button onClick={() => handleRemoveFromCart(eachTShirt._id)}>X</button>
                    
              </p>)
            }
        </div>
    );
};

export default Cart;