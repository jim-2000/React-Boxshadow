import React from 'react';
import {Link} from 'react-router-dom'
const Nav = () => {
    return (
        <>
            <>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/:profile_id">Profile</Link></li>
                    
                </ul>
            </>
        </>
    );
};

export default Nav;
