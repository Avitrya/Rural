import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
//import ContactUs from './Rural/ContactUs';
import Blog from './Rural/Blog';
import Login from './Rural/Login';
import Product from './Rural/Product';
import LandingPage from './Rural/LandingPage';
import Checkout from './Rural/Checkout';
import Cart from './Rural/Cart';

import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '270vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    backgroundSize: '100% 100%'
  
  },
}));



const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <CssBaseline />
            <div className="ui container" style={{width: '1460px'}}>
            <BrowserRouter>
                <div>
                <Header />
                <Route path="/" exact component={LandingPage} />
                <Route path="/login" exact component={Login} />
                <Route path="/blog" exact component={Blog} />
                <Route path="/product" exact component={Product} />
                <Route path="/buyer/product/:id/checkout" exact component={Checkout} />
                <Route path="/cart" exact component={Cart} />
                {/* <ContactUs /> */}
                </div>
            </BrowserRouter>
            </div>
        </div>
      );
};

export default App;

