import React, {Component} from 'react';
import HeaderComponent from "../../components/headerComponent";
import FooterComponent from "../../components/footerComponent";

class Home extends Component {
    render() {
        return (
            <div>
                <HeaderComponent></HeaderComponent>
                <div>Home page</div>
                <FooterComponent></FooterComponent>
            </div>
        )
    }
}

export default Home;