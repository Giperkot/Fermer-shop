import React, { useState } from 'react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';


function WareCard() {
    const [state, setState] = useState({
        cardMode: "btn-description"
    });
    console.log(state);

    return (
        <div className="ware-cards--wrap">
            <img src="/images/Rectangle 2 .png" alt="Филе бедра цыпленка"/>
            <div className="ware-cards--innerwrap">
                <h4 >Филе бедра цыпленка</h4>
                <div>
                    <div onClick={function (evt) {
                        // debugger;
                        if (evt.target.classList.contains("btn-description")) {
                            setState({
                                cardMode: "btn-description"
                            });
                        }

                        if (evt.target.classList.contains("btn-params")) {
                            setState({
                                cardMode: "btn-params"
                            });
                        }

                        if (evt.target.classList.contains("btn-properties")) {
                            setState({
                                cardMode: "btn-properties"
                            });
                        }
                    }} >
                        <button className={state.cardMode === "btn-description" ?
                            "btn btn-default btn-description btn-active" : "btn btn-default btn-description"}>Описание</button>
                        <button className={state.cardMode === "btn-params" ?
                            "btn btn-default btn-params btn-active" : "btn btn-default btn-params"}>Характеристики</button>
                        <button className={state.cardMode === "btn-properties" ?
                            "btn btn-default btn-properties btn-active" : "btn btn-default btn-properties"}>Свойства</button>
                    </div>
                    <div className={state.cardMode === "btn-description" ?
                        "ware-cards--description" : "hidden"}>
                        <div className="card-text ">
                            <p>
                                Филе бедра без кожи и кости. Птица содержится
                                в свободных птичниках, выращивается на натуральных
                                зерновых кормах, что влияет положительно на вкус мяса.
                                Филейная часть бедра обладает насыщенным вкусом
                                и мясным ароматом.
                            </p>
                        </div>
                        <span className="price-background-blue">400 руб. / 700 гр.</span>
                    </div>
                    <div className={state.cardMode === "btn-params" ?
                        "ware-cards--params" : "hidden"}>
                        <p>
                            <b>Масса:</b> 0,7 кг. (595-805 г.).
                        </p>
                        <p>
                            <b>Срок годности:</b> 6 суток
                        </p>
                        <p>
                            <b>Порода:</b> КОББ 500.
                        </p>
                        <p>
                            <b>Срок годности:</b> 6 суток.
                        </p>
                        <p>
                            <b>Место происхождения:</b> Тверская область
                        </p>
                    </div>
                    <div className={state.cardMode === "btn-properties" ?
                        "ware-cards--properties" : "hidden"}>
                        <p>
                            <b>Энергетическая ценность:</b> 135 ккал./565 кДж.
                        </p>
                        <p>
                            <b>Пищевая ценность:</b> белки - 13,8 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WareCard;