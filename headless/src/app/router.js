import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from "./pages/homePage";
import Cart from './pages/cartPage';
import ProductDetail from "./pages/productDetailPage";
import ProductList from "./pages/productListingPage";
import Checkout from "./pages/checkoutPage";

class Routing extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/pdp" component={ProductDetail}/>
                    <Route path="/plp" component={ProductList}/>
                    <Route path="/checkout" component={Checkout}/>
                </Switch>
            </Router>
        )
    }
}

export default Routing;

