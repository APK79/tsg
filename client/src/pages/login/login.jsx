import React from 'react';
import "./style.css";

const Login = () => {
    return (
    <div className="login-page">
    <div className="form">
        <form className="register-form">
        <input type="text" placeholder="name"/>
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
        <input type="text" placeholder="email адрес"/>
        <input type="password" placeholder="пароль"/>
        <p className="message"><a href="#!">Забыли пароль?</a></p>
        <button>ВОЙТИ</button>
        <p className="message">Не зарегистрированы? <a href="#!">Создать аккаунт</a></p>
        </form>
    </div>
    </div>
    );
  }
  
  export default Login;