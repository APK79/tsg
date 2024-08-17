import React from "react";
import "../style.css";
import NewsTitle from "./newstitle";
import NewsListImage from "./newslistimg";
import NewsPubliched from "./newspublished";
import NewsListButton from "../buttons/newslistbtn";

const NewsItem = ( { data: { id, author, title, description, url, urlToImage, publishedAt, content } } ) => {
    return (
        <li className="news-list__list__item" key={id}>
            <div className="news-list__list__item__content__wrapper">
                <NewsListImage src={urlToImage} alt={title}/>
                <NewsPubliched at={publishedAt} />
                <NewsTitle title={title} />
                <NewsListButton id={id} />
            </div>
        </li>
    );
}

export default NewsItem