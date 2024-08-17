// Breadcrumb.js
import React from 'react';
import { Link, useRoutes } from 'react-router-dom';

const Breadcrumb = () => {
  const routes = useRoutes();

  const breadcrumbs = routes?.filter((route) => route.path !== '*' && route.element.props?.breadcrumb);

  return (
    <div>
      {breadcrumbs &&
        breadcrumbs.map((breadcrumb, index) => (
          <span key={index}>
            <Link to={breadcrumb.props.to}>{breadcrumb.props.breadcrumb}</Link>
            {index < breadcrumbs.length - 1 && ' / '}
          </span>
        ))}
    </div>
  );
};

export default Breadcrumb;