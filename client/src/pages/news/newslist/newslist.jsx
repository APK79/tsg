import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import getList from "../../../data/news.json";
import NewsItem from "./components/newsItem.jsx";
import "./style.css";


const NewsList = () => {

   const [list, setList] = useState(getList);

    return(
        <div className='news-list'>
            <div className="news-list-full-size">
                <div className="container">
                    <div className="news-list__wrapper">
                        <h1>НОВОСТИ</h1>
                        <ul className="news-list__list">
                            {list.slice().reverse().map((item) =>
                                <NewsItem key={item.id} data={item} />
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsList;
