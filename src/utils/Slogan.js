import {Link} from "react-router-dom";


function Slogan (props) {
    return (
        <div className="slogan frame">
            <div className="logo-wrapper">
                <div className="logo-wrapper--img">
                </div>
                <div className="logo-wrapper--name-shop">
                    Фермерские продукты
                </div>
            </div>
            <p>{props.compToRight}</p>
            {/*<p>Создано 2021</p>*/}
        </div>
    );
}

export default Slogan;