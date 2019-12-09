import React, {Component} from 'react';
import HeaderComponent from "../../components/headerComponent";
import FooterComponent from "../../components/footerComponent";

class ProductDetail extends Component {
    render() {
        return (
            <div>
                <HeaderComponent></HeaderComponent>
                <div>PDP</div>
                <FooterComponent></FooterComponent>
            </div>
        )
    }
}

export default ProductDetail;