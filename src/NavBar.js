import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about/">About</Link></li>
            <li><Link to="/cats/">Cats</Link>
                <ul>
                    <li><Link to="/cats/oakly">Oakly</Link></li>
                    <li><Link to="/cats/milla">Milla</Link></li>
                    <li><Link to="/cats/oreo">Oreo</Link></li>
                </ul>
            </li>
        </ul>
    );
};

export default NavBar;