import React,{useState} from "react";
import { Link } from "react-router-dom";
import './aside.css';

const Aside =()=>{

    return(
        <div className="aside container">
            <div className="header">
            <i class="fa-solid fa-bars"></i>
            <h1>Categories</h1>
            </div>
            <div className="body">
                <ul className="ul-body">
                    <li><Link to="/"><i class="fa-solid fa-house"></i>Home</Link></li>
                    <li ><Link to="Products"><i class="fa-solid fa-shop"></i>Products</Link></li>
                    <li ><Link to="Orders"><i class="fa-solid fa-truck-front"></i>Orders</Link></li>
                    <li ><Link to="User"><i class="fa-solid fa-user-tie"></i>Users</Link></li>
                
                </ul>
            </div>
        
        </div>
    );
}
export default Aside;