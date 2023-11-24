import React from "react";
import { Link } from "react-router-dom";
const User = ()=>{
    return (
        <div className="content">
        <h1 className="links"><Link to="/" className="home">Home</Link> User</h1>
        <table className="table"  >
        <thead>
            <tr>
            <th >id</th>
            <th >name</th>
            <th >phoneNumber</th>
            <th >Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>#</td>
            <td>hhhg</td>
            <td>bgvf</td>
            <td>
                <button className="btn danger">Delete</button>
                <button className="btn sacandry">blocked</button>
            </td>
            </tr>
            <tr>
            <td>#</td>
            <td>hhhg</td>
            <td>,kmjn</td>
            <td>
                <button className="btn danger">Delete</button>
                <button className="btn sacandry">blocked</button>
            </td>
            </tr>
            <tr>
            <td>#</td>
            <td>hhhg</td>
            <td>,kmjn</td>
            <td>
                <button className="btn danger">Delete</button>
                <button className="btn sacandry">blocked</button>
            </td>
            </tr>
            <tr>
            <td>#</td>
            <td>hhhg</td>
            <td>,kmjn</td>
            <td>
                <button className="btn danger">Delete</button>
                <button className="btn sacandry">blocked</button>
            </td>
            </tr>
            
        </tbody>
        </table>
        <div className="pagination">
            
            <button className="botn"> N</button>
            <button className="botn">1 </button>
            <button className="botn">2 </button>
            <button className="botn">3 </button>
            <button className="botn">P </button>
        </div>
        </div>
    )
}
export default User;