import "./style.css";
import Logo from '../../UI/logo/logo.jsx';

const HowYear = () => {
    return (
        <span className="footer-year">{(new Date().getFullYear())}</span>
    )};

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer-full-size">
                    <div className="container">
                        <div className="footer-wrapper">
                            <div className="footer-logo">
                            <a href="./app.js" className="footer-logo-link">                                
                                <div className="footer-logo-img"><Logo /></div>
                                <ul className="footer-logo-list"> 
                                    <li className="footer-logo-list__item"><b>Краснолесья</b><span>14<em>к</em>5</span></li>
                                    <li className="footer-logo-list__item">Товарищество собственников жилья</li>
                                </ul></a>
                                <div className="footer-logo__contacts">
                                    <ul className="footer-logo__contacts-list"> 
                                        <li className="footer-logo__contacts-list__item">КЛИЕНТСКИЙ ОТДЕЛ</li>
                                        <li className="footer-logo__contacts-list__item">ДИСПЕТЧЕРСКАЯ СЛУЖБА</li>
                                        <li className="footer-logo__contacts-list__item"><b>+7 (343) 267-96-43</b></li>
                                        <li className="footer-logo__contacts-list__item"><b>+7 (343) 346-81-84</b></li>
                                    </ul>
                                </div>
                            </div>
                            <ul className="footer__nav-menu">
                                <li className="footer__nav-menu__item"><a href="#!" className="footer__nav-menu__item__link">О нас</a></li>
                                <li className="footer__nav-menu__item"><a href="#!" className="footer__nav-menu__item__link">Собрания собственников</a></li>
                                <li className="footer__nav-menu__item"><a href="#!" className="footer__nav-menu__item__link">Информация</a></li>
                                <li className="footer__nav-menu__item"><a href="#!" className="footer__nav-menu__item__link">Телефонный справочник</a></li>
                                <li className="footer__nav-menu__item"><a href="#!" className="footer__nav-menu__item__link">Новости</a></li>
                                <li className="footer__nav-menu__item"><a href="#!" className="footer__nav-menu__item__link">Информация и вопросы</a></li>
                                <li className="footer__nav-menu__item"><a href="#!" className="footer__nav-menu__item__link">Контакты</a></li>
                                <li className="footer__nav-menu__item"><a href="#!" className="footer__nav-menu__item__link">Услуги и мастера</a></li>
                            </ul>
                            <ul className="footer__operation-mode">
                                <li className="footer__operation-mode__item"><p><strong>Режим работы ТСЖ</strong></p></li>
                                <li className="footer__operation-mode__item"><em>пн-чт: </em><span>с 9:00 до 15:00 </span></li>
                                <li className="footer__operation-mode__item"><em>пт-вс: </em><span>Выходной</span></li>
                                <li className="footer__operation-mode__item"><p><strong>Консъерж</strong></p></li>
                                <li className="footer__operation-mode__item"><em>пн-вс: </em><span>Круглосуточно</span></li>
                            </ul>
                        </div>
                        <hr />
                        <ul className="footer-footer">
                            <li className="footer-footer__item">© <HowYear /> ТСЖ Краснолесья 14 корпус 5</li>
                            <li className="footer-footer__item text-center"><a href="#!" className="footer-footer__link">Политика конфеденциальности</a></li>
                            <li className="footer-footer__item text-right">Сайт создан: <a href="#!" className="footer-footer__link">АК</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
  
  export default Footer;