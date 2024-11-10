import { createBrowserRouter, Outlet, Link, RouterProvider, ScrollRestoration } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";
import Header from '../components/assets/header/header.jsx';
import Footer from '../components/assets/footer/footer.jsx';
import Main from '../pages/main/main.jsx';
import About from '../pages/about/about.jsx';
import NewsList from '../pages/news/newslist/newslist.jsx';
import News from "../pages/news/newslist/news.jsx";
import Contacts from "../pages/contacts/contacts.jsx";
import ErrorPage from "../pages/errorpage/errorpage.jsx";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs.jsx";
import Login from '../pages/auth/login.jsx'


const Router = () => {

  const {isAuth, setIsAuth} = useContext(AuthContext);
  console.log(isAuth);

  function Layout() {
    return (
      <div className="App">
          <Header />
          <Breadcrumbs/>
          <Outlet />
          <Footer />
          <ScrollRestoration />
        </div>
    );
  }

const router = createBrowserRouter([
  {
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [  
      {
        path: '/',
        element: <Outlet />,
        handle: { crumb: () => <Link to="/">Главная</Link>},
        children: [      
          {
            index: true,
            element: <Main />,
          },  
        {
          path: '/about',
          element: <About />,
          handle: { crumb: () => <span>О нас</span>} 
        },
        {
          path: '/contacts',
          element: <Contacts />,
          handle: { crumb: () => <span>Контакты</span>} 
        },
        {
          path: '/newslist',
          element: <Outlet />,
          handle: { crumb: () => <Link to="/NewsList">Новости</Link>},
          children: [
            {
              index: true,
              element: <NewsList />,
            },
            {
            path: 'news/:id',
            element: <News />,
            handle: { crumb: () => <span>Новость</span>}   }]
        },
        {
          path: '/login',
          element: <Login />,
          handle: { crumb: () => <span>Авторизация</span>} 
        },
        ] 
      },
      ]
    }
  ])

return <RouterProvider router={router} />
}

export default Router;