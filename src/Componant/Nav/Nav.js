import React,{useState} from 'react';
import './nav.css';

const Nav = () => {
    const [Icon,setIcon]=useState(true);
    



    const showSearch = () =>{
        setIcon(!Icon);
    }
 




    return (
        <div className='nav '>
            <div className="top-nav container">
                <div className=' left'>
                    <a href='#'>$USD <i className="fa-solid fa-caret-down"></i>
                        </a>
                        <a href='#'>English <i className="fa-solid fa-caret-down"></i> 
                    </a>
                </div>
                <div className='right'>
                    <ul>
                        <li><a href='#'><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href='#'><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href='#'><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href='#'><i className="fa-solid fa-bell"></i></a></li>
                        <li><a href='#'><i className="fa-solid fa-cart-shopping"></i></a></li>
                        <li><a href='#'>login</a></li>
                    </ul>
                </div>
            </div>
            <div className='middle container'>
                <div className='logo'>
                    <h1>Lorem <em>Home</em></h1>
                </div>
                <div className='search'>
                <h1 onClick={() =>showSearch()}> <i className="fa-solid fa-magnifying-glass"></i></h1>
                <form>
                    <input type='search' className={Icon ? "show":"hide" } placeholder='search here....'/>
                </form>
                </div>
                <div className= 'ii'>
                    <i className="fa-solid fa-heart" ></i>
                    <div className='block'>
                        <h1>0</h1>
                    <i className="fa-solid fa-lock"></i>
                    </div>   
                </div>
            </div>
            
        </div>
        
        
    )

}
export default Nav;