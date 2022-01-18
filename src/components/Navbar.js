import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/customers">Customers</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    )
}

export default Navbar
