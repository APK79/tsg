import "./style.css";
import aboutImg from "../../components/img/pic/14k5_tsg.webp";
import People from "../components/people";


const About = () => {

    return(
        <div className="about">
            <div className="about-full-size">
                <div className="container">
                    <div className="about-wrapper">
                        <div className="about__img-wrapper">
                            <div className="about__img-wrapper__title">
                                <h1>Информация о ТСЖ Краснолесья 14к5</h1>
                                <p>Основная информация и принципы работы товарищества собственников жилья</p>
                            </div>   
                        <img src={aboutImg} alt="ТСЖ Краснолесья 14к5 вход" />
                        </div>
                        <div className="about-content">
                        <span><b> Краткая справка </b></span> - ТСЖ - это товарищество собственников жилья, организация, которая создается жильцами для управления и обслуживания многоквартирного дома или группы домов. ТСЖ представляет интересы жильцов, решает вопросы ремонта, благоустройства территории, оплаты коммунальных услуг и другие вопросы, связанные с общим имуществом и содержанием жилья.
                        </div>
                        <div className="about-content">
                        <span><b>Основная задача ТСЖ Краснолесья 14к5</b>:</span>
                        <ul className="about-content__list">
                            <li className="about-content__list__item">Представительство интересов жильцов в вопросах, связанных с управлением, содержанием и обслуживанием общего имущества многоэтажного дома.</li>
                            <li className="about-content__list__item">Обеспечение надлежащего уровня коммунальных услуг и решение возникающих проблем, конфликтов и недопониманий. </li>
                            <li className="about-content__list__item">Оптимизировать расходы жильцов на коммунальные услуги, контролируя их качество и своевременность выплат поставщикам.</li> 
                            <li className="about-content__list__item">Благоустройство территории, строительство дополнительных объектов и другими видами деятельности, направленными на улучшение условий проживания жильцов.</li> 
                        </ul>
                        </div>
                        <div className="about-content">
                        <span><b> Наша Миссия </b></span> - 
                        <em>заключается в обеспечении комфортного и безопасного проживания граждан, сохранении и улучшении состояния общего имущества, а также обеспечении эффективного использования ресурсов и контроля за их качеством.</em>
                        </div>
                        <div className="about-content">
                        <span><b>Основные принципы работы ТСЖ включают в себя:</b></span>
                        <ul className="about-content__list">
                            <li className="about-content__list__item"><em><b>Интересы жильцов: </b></em> Главное в отношениях с коммунальными службами, управляющими компаниями и другими организациями.</li>
                            <li className="about-content__list__item"><em><b>Самоуправление:  </b></em> Самостоятельность в принятии решений по вопросам, касающимся управления и содержания общего имущества.</li>
                            <li className="about-content__list__item"><em><b>Прозрачность:   </b></em> Открытось и прозрачность для своих членов, предоставление информации о своей деятельности и финансовых операциях</li> 
                            <li className="about-content__list__item"><em><b>Ответственность:  </b></em> Перед жильцами за качество предоставляемых услуг и соблюдение установленных стандартов.</li>
                            <li className="about-content__list__item"><em><b>Эффективность:  </b></em> Стремимление к оптимизации расходов и повышению эффективности своей деятельности.</li> 
                        </ul>
                        </div>
                        <div className="about-people">
                            <div className="about-people__head"> <h2>Люди - которые с Вами работают!</h2> </div>
                            <div className="about-people-wrapper">
                                <People />
                            </div>
                        </div>
                        <div className="about-phone">
                            <b>По интересующим вопросам звонить:</b>
                            <p>+7 (343) 267-96-43</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;