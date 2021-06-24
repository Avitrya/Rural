import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
    return(
        <div className="ui secondary pointing menu" style={{height: '65px'}}>
            <Link to="/" className="item">
                <i className="home icon"></i>
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
                    <button className="ui google plus button">
                        Login
                    </button>
                </Link>
                <Link to="/cart" className="item">
                    <i className="shopping cart big icon"></i>
                </Link>
            </div>
        </div>
    );
};

export default Header;