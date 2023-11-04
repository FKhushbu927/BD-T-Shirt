import React from 'react';

const Cart = ({cart,  handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>    
    }else{
        message = <div>
            <h3>Thanks for adding products</h3>
        </div>
    }
    return (
        <div>
            <h2>Order summary:{cart.length}</h2>
            {cart.length > 2 ? <span>Want to Buy more!!</span> : <span>Having Low budget?</span>}
            {message}

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