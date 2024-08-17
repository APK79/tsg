import "./style.css";
import Logo from '../../reused/logo/logo.jsx';
import Navbar from '../navbar/navbar.jsx';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header-logo-wrapper">
                            <NavLink to="/" className="header-logo-link">
                                <Logo />
                                <ul className="logo"> 
                                    <li className="logo__item"><b>Краснолесья</b><span>14<em>к</em>5</span></li>
                                    <li className="logo__item">Товарищество собственников жилья</li>
                                </ul>
                            </NavLink>
                        </div>
                        <Navbar />
                    </div>
                </div>
            </div>
        </header>

    );
  }
  
  export default Header;