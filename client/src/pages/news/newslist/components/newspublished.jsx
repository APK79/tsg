import React from "react";

import "../style.css";

export default function NewsPubliched({ at }) {
  return <div className="news-list__list__item__published-at">{ at }</div>;
}