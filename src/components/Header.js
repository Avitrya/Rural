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
                <a style={{marginTop: "25px"}} href="http://localhost:63342/Rural/src/components/Rural/Loginn.html?_ijt=cbpdk3i12670h8q3u2o3p5s4hg"><button className="ui google plus button">Login</button></a>
            </div>
        </div>
    );
};

export default Header;
