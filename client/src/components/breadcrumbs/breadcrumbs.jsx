import { useMatches } from "react-router-dom";
import classes from './breadclumbs.module.css';

function Breadcrumbs() {
  let matches = useMatches();
  let crumbs = matches

    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.data));
    
 if (crumbs.length > 1)
    return (
      <div className="container">
        <ul className={classes.breadcrumbs}>
          {crumbs.map((crumb, index) => (
            <li key={index} className="breadcrumb"> 
            {(crumbs.length > 1 && (index !== crumbs.length -1)) ? <span>{crumb}<i> &nbsp;  / 	&nbsp; </i> </span> : crumb} </li>

          ))}
        </ul>
      </div>
      );
}
export default Breadcrumbs;