import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.details;
    const totalSalary = cart.reduce((total, slr)=> total + slr.salary,0);
    console.log(cart);
    


    return (
        <div>
            <p className='added'>You Added User In your ID : {cart.length} Person</p>
            <h4>You Added</h4>
            <h1>Total Salary : {totalSalary}</h1>        
        </div>
    );
};

export default Cart;