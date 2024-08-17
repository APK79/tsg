import React from "react";
import { ReactComponent as Wuser } from "../../components/img/icons/w_user.svg";

const People = () => {

    return(
        <div className="people__wrapper">
            <div className="people__item">
            <div className="people__item__img-wrapper">
                <Wuser />
                <div className="people__item__title">
                    <div className="people__item__title__company-post">
                        Председать ТСЖ
                    </div>
                    <div className="people__item__title__name">
                        Наталья Викторовна Гусева
                    </div>
                    <div className="people__item__title__work-time">
                        <p>Прием по вторникам</p> с 10-00 до 12-00
                    </div>
                </div>
            </div>
        </div>
        <div className="people__item">
            <div className="people__item__img-wrapper">
                <Wuser />
                <div className="people__item__title">
                <div className="people__item__title__company-post">
                        Бухгалтер
                    </div>
                    <div className="people__item__title__name">
                        Ольга Петровна Осипова
                    </div>
                    <div className="people__item__title__work-time">
                        <p>Прием по вторникам </p>с 10-00 до 12-00
                    </div>
                </div>
            </div>
        </div>
        <div className="people__item">
            <div className="people__item__img-wrapper">
                <Wuser />
                <div className="people__item__title">
                <div className="people__item__title__company-post">
                        Техник - смотритель
                    </div>
                    <div className="people__item__title__name">
                        Татьяна Федоровна Чубыкина
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

}

export default People;