import WareCard from "./utils/WareCard";

function Menu () {

    return (
        <div className="menu-column-flex frame">
            <section>
                <fieldset className="filters filters-products filters-padding-override">
                    <legend className="hidden">Выбор продукта</legend>
                    <div className="fieldset-title"><b>Выберите продукты</b></div>
                    <ul>
                        <li className="filter-option filter-checkbox">
                            <input className="visually-hidden filter-input-checkbox filter-input" type="checkbox"
                                   name="hang" id="chicken-fillet"/>
                                <label className="label-margin" htmlFor="chicken-fillet">Филе бедра цыпленка</label>
                        </li>
                        <li>
                            <input className="visually-hidden filter-input-checkbox filter-input" type="checkbox"
                                   name="hang" id="goose-fillet"/>
                                <label className="label-margin" htmlFor="goose-fillet">Филе бедра гуся</label>
                        </li>
                        <li>
                            <input className="visually-hidden filter-input-checkbox filter-input" type="checkbox"
                                   name="hang" id="beef-pulp"/>
                                <label className="label-margin" htmlFor="beef-pulp">Мякоть бедра говяжья</label>

                        </li>
                        <li>
                            <input className="visually-hidden filter-input-checkbox filter-input" type="checkbox"
                                   name="hang" id="chicken-breast" />
                                <label className="label-margin" htmlFor="chicken-breast">Грудка цыпленка на кости</label>

                        </li>
                        <li>
                            <input className="visually-hidden filter-input-checkbox filter-input" type="checkbox"
                                   name="hang" id="chicken-drumstick" />
                                <label className="label-margin" htmlFor="chicken-drumstick">Голень ципленка</label>

                        </li>
                    </ul>
                </fieldset>
                <fieldset className="filters filters-order">
                    <legend className="hidden">Сделать заказ</legend>
                    <div className="fieldset-title"><b>Сделать заказ</b></div>
                    <input className="order-input" name="input-adress" id="input-adress" placeholder="Введите адрес доставки"/>
                    <span className="span-price">Цена</span>
                    <span className="span-value">1200 руб.</span>
                    <button className="btn-header btn-second-page"> Купить </button>
                </fieldset>
            </section>

            <section className="products">
                <legend></legend>
                <ul>
                    <li className="ware-cards">
                        <WareCard/>
                    </li>
                    <li className="ware-cards">
                        {/*<div className="ware-cards--wrap">
                            <img src="images/Rectangle 1.png" alt="Филе бедра гуся"/>
                        </div>*/}
                        <WareCard/>
                    </li>
                    <li className="ware-cards">
                        {/*<div className="ware-cards--wrap">
                            <img src="images/Rectangle 1.png" alt="Мякоть бедра говяжья"/>
                        </div>*/}
                        <WareCard/>
                    </li>
                </ul>

            </section>

        </div>
    );
}

export default Menu;