import React from "react";
import "./style.css";
import People from "../components/people";
import YaMap from "../components/map";

const Contacts = () => {

    return(
        <div className="contacts">
            <div className="contacts-full-size">
                <div className="container">
                    <div className="contacts__wrapper">
                        <h1>КОНТАКТЫ</h1>
                        <div className="contacts__adress-header">
                            <span>НАШ АДРЕС:</span>
                            <h2>ул. ​Краснолесья дом 14 корпус 5, Академический район, Екатеринбург, 620110</h2>
                        </div>
                        <div className="contacts__work-time__wrapper">
                            <ul className="contacts__work-time">
                                <li className="contacts__work-time__item">
                                    <h3>ВРЕМЯ РАБОТЫ:</h3>
                                </li>
                                <li className="contacts__work-time__item">
                                    <div className="contacts__work-time__item__desc">
                                        <span>ПН-ВТ:</span><b>с 10:00 до 16:00</b>
                                    </div>
                                </li>
                                <li className="contacts__work-time__item">
                                    <div className="contacts__work-time__item__desc">
                                        <span>СРЕДА:</span><b>Технологический день</b>
                                    </div>
                                </li>
                                <li className="contacts__work-time__item">
                                    <div className="contacts__work-time__item__desc">
                                        <span>ЧТ-ПТ:</span><b>с 10:00 до 16:00</b>
                                    </div>
                                </li>
                                <li className="contacts__work-time__item">
                                    <div className="contacts__work-time__item__desc">
                                        <span>СБ-ВС:</span><b>Выходной</b>
                                    </div>
                                </li>
                                <li className="contacts__work-time__item">
                                    <div className="contacts__work-time__item__desc">
                                        <span>Консьерж:</span><b>Круглосуточно</b>
                                    </div>
                                </li>
                                <li className="contacts__work-time__item">
                                    <div className="contacts__work-time__item__phone">
                                        <span>ТЕЛЕФОН:</span>
                                        <p><b> +7 (343) 267-96-43</b></p>
                                    </div>
                                </li>
                            </ul>
                            <div className="contacts__people">
                                <div className="contacts__people__item">
                                       <h3>ПРИЁМ ГРАЖДАН ВЕДУТ:</h3>             
                                </div>
                                <div className="contacts__people__item">
                                       <People />       
                                </div>
                            </div>
                        </div>
                        <div className="contacts__map">
                            <YaMap />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;