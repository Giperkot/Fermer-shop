import Menu from "../Menu";
import React from "react";
import Slogan from "../utils/Slogan";
import {Link} from "react-router-dom";



function ShopPage () {
    return (
        <div className="app-shop">
            <div className="header-shadow">
                <Slogan compToRight={<Link to="/main">Главная</Link>}/>
            </div>
            <Menu />
        </div>
    );
}

export default ShopPage;