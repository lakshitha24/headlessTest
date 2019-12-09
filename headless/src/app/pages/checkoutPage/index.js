import React, {Component} from 'react';
import HeaderComponent from "../../components/headerComponent";
import FooterComponent from "../../components/footerComponent";

class Checkout extends Component {
    render() {
        return (
            <div>
                <HeaderComponent></HeaderComponent>
                <div>checkout</div>
                <FooterComponent></FooterComponent>
            </div>
        )
    }
}

export default Checkout