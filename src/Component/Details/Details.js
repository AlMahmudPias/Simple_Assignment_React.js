import React from 'react';
import './Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const Details = (props) => {
    console.log(props);
    const  {image, name, id, phone, email,gender,salary} = props.userDetails;


    return (
        <div className='user'>
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="details">
                <h4>ID:    {id}</h4>
                 <h1>{name}</h1>
                 <p>{gender}</p>
                 <p>Phone: +{phone}</p>
                 <p>Email: www.{email}</p>
                 <button onClick={()=>props.handleAddUser(props.userDetails)} className='button'><FontAwesomeIcon icon= {faPlus} />Add User</button>
            </div>
            <div className="salary">
                <h2>$ {salary}</h2>
            </div>
        </div>
    );
};

export default Details;