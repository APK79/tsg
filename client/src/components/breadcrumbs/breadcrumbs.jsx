import { useMatches } from "react-router-dom";

function Breadcrumbs() {
  let matches = useMatches();
  let crumbs = matches

    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.data));
    
 if (crumbs.length > 1)
    return (
      <div className="container">
        <ul className="breadcrumbs">
          {crumbs.map((crumb, index) => (
            <li key={index} className="breadcrumb"> 
            {(crumbs.length > 1 && (index !== crumbs.length -1)) ? <span> {crumb} <i>/</i> </span> : crumb } </li>

          ))}
        </ul>
      </div>
      );
}
export default Breadcrumbs;