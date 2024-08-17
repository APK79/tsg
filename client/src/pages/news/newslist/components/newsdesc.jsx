import React from "react";

import "../style.css";

export default function NewsDesc({ data }) {
  return <div className="news-list__list__item__desctiption">{ data }</div>;
}