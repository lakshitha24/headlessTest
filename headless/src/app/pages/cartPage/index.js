import React, {Component} from 'react';
import HeaderComponent from "../../components/headerComponent";
import FooterComponent from "../../components/footerComponent";

class Cart extends Component {
    render() {
        return (
            <div>
                <HeaderComponent></HeaderComponent>
                <div>Cart</div>
                <FooterComponent></FooterComponent>
            </div>
        )
    }
}

export default Cart;