import React from "react";

import "../style.css";

export default function NewsTitle({title}) {
  return <div className="news-list__list__item__title">{ title }</div>;
}