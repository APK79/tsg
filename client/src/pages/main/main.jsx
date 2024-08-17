import React, { useRef, useEffect, useState } from 'react';
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import locPin from "../../components/img/icons/location.svg";
import secCam from "../../components/img/icons/sec_cam.svg";
import newsImg from "../../components/img/pic/news/ny2024_1-5.jpg";
import Slider from "../../components/slider/Slider.jsx";

const TextRing = ({children, side, image}) => {

  const [width, setWidth] = useState(0);

  const elRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(elRef.current.offsetWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const CHARS = children.split('');
  return (
   
    <div className="main-about-home__item__render" ref={elRef}>
       {image}  
      <span
        className="main-about-home__item__render-item"
        style={{
          '--total': CHARS.length,
          '--radius': width / side
        }}  
      >
        {CHARS.map((char, index) => (
          <span style={{'--index': index }} key={index}>
            {char}
          </span>
        ))}
      </span>
     </div>
  )
}

const AppText = () => {
  return (
    <TextRing side={9} image={<img src={secCam} tittle="Охранная камера" alt="охранная камера картинка"/>}>
      Видеонаблюдение в доме •&nbsp;
    </TextRing>
  )
}

const Main = () => {
    return (  
      <div className="main">
        <div className="main-header-full-size">
          <div className="container">
            <ul className="main-header">
              <li className="main-header__item order2"> 
                <div className="main-header__item__container">
                  <div className="main-header__item__container-wrapper">
                    <div className="main-header__item__news-wrapper">
                      <div className="main-header__item__news-head"><p>Приезжал Дед мороз со Снегурочкой: Танцевали вместе с детьми и взрослыми.</p></div>
                      <div className="main-header__item__short-news"><p>В предверии нового года правление ТСЖ совместно с Дедом морозом и снегурочкой утроили праздник для детей и взрослых с музыкой, подарками и танцами.</p></div>
                      <div className="main-header__item__button"><button type="button">подробнее</button></div>
                    </div>
                    <div className="main-header__item__news-img-wrapper">
                      <img src={newsImg} tittle="Новый год 2024 год для детей во дворе" alt="Новый год 2024 год для детей во дворе" />
                    </div>
                  </div> 
                </div>
              </li>
              <li className="main-header__item order">
                <div className="main-header__item__grid-box">
                  <div className="main-header__item__info">
                    <a href="#!">
                      <div className="main-header__item__info__btn">
                        <div className="main-header__item__info__btn-inner">Сдать показания</div>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="main-header__item__info__btn">
                        <div className="main-header__item__info__btn-inner">Оплатить онлайн</div>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="main-header__item__info__btn">
                        <div className="main-header__item__info__btn-inner">Написать обращение</div>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="main-info">
          <div className="main-info-full-size">
            <div className="container">
              <div className="main-info__wrapper">
                <ul className="main-info__box-list">
                  <li className="main-info__box-list__item">
                    <div className="main-info__box-list__item__wrapper">
                      <div className="main-info__box-list__item__info-img"></div>
                      <div className="main-info__box-list__item__info-head">Собрания собственников</div>
                      <div className="main-info__box-list__item__info-desc">Информация о собраниях собственников жилья и их решениях.</div>
                      <a href="#!" className="main-info__box-list__item__info-url"> </a>
                    </div>
                  </li>
                  <li className="main-info__box-list__item">
                    <div className="main-info__box-list__item__wrapper">
                      <div className="main-info__box-list__item__info-img"></div>
                      <div className="main-info__box-list__item__info-head">Информация и вопросы</div>
                      <div className="main-info__box-list__item__info-desc">Часто задаваемые вопросы и общая информация.</div>
                      <a href="#!" className="main-info__box-list__item__info-url"> </a>
                    </div>
                  </li>
                  <li className="main-info__box-list__item">
                    <div className="main-info__box-list__item__wrapper">
                      <div className="main-info__box-list__item__info-img"></div>
                      <div className="main-info__box-list__item__info-head">Телефонный справочник</div>
                      <div className="main-info__box-list__item__info-desc">Все необходимые телефоны для разных ситуаций.</div>
                      <a href="#!" className="main-info__box-list__item__info-url"> </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="main-gallery">
          <div className="main-gallery-full-size">
            <div className="container">
              <Slider />
            </div>
          </div>
        </div>

        <div className="main-about-home">
          <div className="about-home-full-size">
            <div className="container">
              <ul className="main-about-home">
                  <li className="main-about-home__item"> 
                    <div className="main-about-home__item__container">
                      <div className="main-about-home__item__container__phone">
                        <div className="main-about-home__item__container__phone-img">
                        </div>
                        <div className="main-about-home__item__container__phone-grid">
                          <span>КЛИЕНТСКИЙ ОТДЕЛ</span>
                          <p>+7 (343) 267-96-43</p>
                          <span>ДИСПЕТЧЕРСКАЯ СЛУЖБА</span>
                          <p>+7 (343) 346-81-84</p>
                        </div>
                      </div>
                      <div className="main-about-home__item__top-white-box"><div></div></div>
                      <div className="main-about-home__item__bottom-white-box"><div></div></div>
                      <div className="main-about-home__item__sec-cam">
                        <AppText/>
                      </div>
                      <a href="#!"><img src={locPin} className="main-about-home__item__location d-none-xs" tittle="Краснолесья 14к5 на карте" alt="Краснолесья 14к5 вид картинка"/></a>
                    </div>
                  </li>
                  <li className="main-about-home__item"> 
                  <h3>Основные сведения о доме</h3>
                    <div className="main-about-home__item__inner">
                      <div className="main-about-home__grid">
                        <div className="main-about-home__grid__item">
                          <span>Год постройки:</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span> 2006</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span>Год ввода в эксплуатацию:</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span> 2007</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span>Количество этажей:</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span>18</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span>Количество подъездов:</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span>2</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span>Количество лифтов:</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span>4</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span>Жилых помещений:</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span> 139</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span>Газоснабжение:</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span>нет</span>
                        </div>

                        <div className="main-about-home__grid__item">
                          <span>Серия, тип постройки:</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span> Индивидуальный (33/ПРП-2005/3)</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span>Тип перекрытий:</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span> Монолитные железобетонные плиты</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span>Материал несущих стен:</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span> Монолитный железобетонный каркас</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span>Материал отделки фасада:</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span> Наружная облицовка кирпичом</span>
                        </div>
                        
                        <div className="main-about-home__grid__item">
                          <span>Фундамент:</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span>Ленточный</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span>Стояки ХВС и ГВС:</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span>Металопластиковые трубы</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span>Тип отопительных приборов:</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span>Конвектор</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span>Стояки отопления:</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span>Оцинкованная сталь</span>
                        </div>
                        
                        <div className="main-about-home__grid__item">
                          <span>Кадастровый номер:</span>
                        </div>
                        <div className="main-about-home__grid__item">
                          <span>66:41:0404016:55</span>
                        </div>
                      
                      </div>
                    </div>

                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Main;