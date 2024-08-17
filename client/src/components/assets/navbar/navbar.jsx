import "./style.css";
import React, { useRef, useState } from 'react';
import { NavLink } from "react-router-dom";
import { ReactComponent as MobileNavbarImg } from '../../img/icons/menu.svg';
import { useClickOutside } from "../../../hooks/useClickOutside";

const Navbar = () => {

    const activeLink = "header-navbar__nav-list__link--active"
    const normalLink = "header-navbar__nav-list__link"
    const getActive  = ({ isActive }) => isActive ? activeLink : normalLink

    const [isOpened, setIsOpened] = useState(false);
    
    const handlerMenu = () => setIsOpened(!isOpened);
    const addClassOpened = () => (isOpened) ? 'opened' : '';
    
    const navMenuRef = useRef(null);
    useClickOutside(navMenuRef, () => {
        if (isOpened) setTimeout (() => setIsOpened(false), 100);
    });

    return (
        <nav className="nav">
            <div className="header-navbar">
                <div className="header-navbar-wrapper">
                        <button type="button" className={`header-navbar__mobile-nav-list__icon ${ addClassOpened() }`} onClick={ handlerMenu } ref={ navMenuRef }>
                            <MobileNavbarImg />
                        </button>
                    <ul className={`header-navbar__nav-list ${ addClassOpened() }`} ref={ navMenuRef }>
                        <li className="header-navbar__nav-list__item"><NavLink to="/about" className={ getActive }>О нас</NavLink></li>
                        <li className="header-navbar__nav-list__item"><NavLink to="/newslist" className={ getActive }>Новости</NavLink></li>
                        <li className="header-navbar__nav-list__item"><a href="#!" className="">Информация</a></li>
                        <li className="header-navbar__nav-list__item"><NavLink to="/contacts" className={ getActive }>Контакты</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
  
  export default Navbar;