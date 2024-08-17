import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import getList from "../../../data/news.json";
import ErrorPage from "../../errorpage/errorpage.jsx";
import "./style.css";


const News= () => {
    const {id} = useParams();

    const [list, setList] = useState(getList);

    const [newsItem] = list.filter( (item) => (Number(id) === item.id) ? item : false );

    if(newsItem === undefined) return <ErrorPage />

    const { author, title, description, url, urlToImage, publishedAt, content } = newsItem;
    

     return(
         <div className='news'>
             <div className="news-full-size">
                 <div className="container">
                     <div className="news__wrapper">
                         <div className="news__list">
                            <article className="news__list__title"><h1>{(title) ? title : false}</h1></article>
                            <div className="news__list__img-wrapper">
                                <img src={(urlToImage) ? urlToImage : false} alt={`${title} картинка`} />
                                <span className="news__list__published-at">{(publishedAt) ? publishedAt : false}</span>
                            </div>
                            <div className="news__list__content">{(content) ? content : false}</div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     )
 }
 
 export default News;