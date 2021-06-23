import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
    return(
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Home
            </Link>
            <Link to="/product" className="item">
                All Products
            </Link>
            <div className="right menu">
                <Link to="/blog" className="item">
                    Stories
                </Link>
                <Link to="/login" className="item">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Header;