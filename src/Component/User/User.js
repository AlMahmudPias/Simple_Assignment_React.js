import React, { useState } from 'react';
import './User.css';
import data from '../Data/DATA.json'
import Details from '../Details/Details';
import Cart from '../Cart/Cart';
import AddedUser  from '../AddedUser/addedUser';



 const User =  () => {
        console.log(data);
        
        const first20 = data.slice(0, 20);
        const [dataUser, setDataUser] = useState(first20);
        const [details, setDetails] = useState([]);


        const handleAddUser =(user) =>{
            console.log('clicked',user);
            const newUser = [...details,user];
            setDetails(newUser);  
        }
        
        



        return (
            
        <div className='media-container'>
            <div className="user-container">
                {
                    dataUser.map(ud => <Details handleAddUser={handleAddUser} userDetails={ud}></Details>)
                }
            </div>
            <div className="add-user-conatainer">
                <Cart details={details}></Cart>
            

            </div>
           
             
             
                
             
    
        </div>
        
        
    );
    
};

export default User;