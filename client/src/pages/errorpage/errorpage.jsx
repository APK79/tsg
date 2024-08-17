import React from 'react';
import "./style.css";


const ErrorPage= () => {


     return(
         <div className='page-404'>
                 <div className="container">
                     <div className="page-404__wrapper">
                         <div className="page-404__error">
                           <h1>404</h1>
                           <p>Запрашиваемой страницы не найдено</p>
                         </div>
                     </div>
                 </div>
             </div>
     )
 }
 
 export default ErrorPage;