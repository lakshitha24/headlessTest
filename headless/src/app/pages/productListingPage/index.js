import React, {Component} from 'react';
import HeaderComponent from "../../components/headerComponent";
import FooterComponent from "../../components/footerComponent";

class ProductList extends Component{
    render(){
        return(
            <div>
                <HeaderComponent></HeaderComponent>
                <div>PLP</div>
                <FooterComponent></FooterComponent>
            </div>
        )
    }
}

export default ProductList;