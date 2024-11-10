import React,  { useContext } from 'react';
import "./style.css";
import DefButton from '../../components/UI/buttons/DefButton';
import DefInput from '../../components/UI/inputs/DefInput';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    console.log(isAuth);
    
    const login = e => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
    <div className="login-page">
        <div className="form" onSubmit={login}>
            <form className="register-form">
            <input type="password" placeholder="пароль"/>
            <input type="text" placeholder="email адрес"/>
            <button>создать</button>
            <p className="message">Уже зарегистрированы? <a href="#!">Авторизоваться</a></p>
            </form>
            <form className="login-form">
            <div className="login-form__header">
                <span>Для получения всех возможностей Вашей учетной записи:</span>
                <span><strong>Авторизуйтесь</strong></span>   
            </div>
            <DefInput type="text" placeholder="email адрес" /> 
            <DefInput type="password" placeholder="пароль"/>
            <p className="message"><a href="#!">Забыли пароль?</a></p>
            <DefButton>Войти</DefButton>
            <p className="message">Не зарегистрированы? <a href="#!">Создать аккаунт</a></p>
            </form>
        </div>
    </div>
    );
  }
  
  export default Login;