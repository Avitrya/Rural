import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Blog from './Rural/Blog';
import Login from './Rural/Login';
import Product from './Rural/Product';
import LandingPage from './Rural/LandingPage';
import Checkout from './Rural/Checkout';

const App = () => {
    return (
        <div className="ui container">
          <BrowserRouter>
            <div>
              {/* <Header /> */}
              <Route path="/" exact component={LandingPage} />
              <Route path="/login" exact component={Login} />
              <Route path="/blog" exact component={Blog} />
              <Route path="/product" exact component={Product} />
              <Route path="/buyer/product/:id/checkout" exact component={Checkout} />
            </div>
          </BrowserRouter>
        </div>
      );
};

export default App;

