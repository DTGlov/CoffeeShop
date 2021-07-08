import React,{useEffect,useState} from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { CurrentContext,SetContext } from './context/edit';

import * as ROUTES from './constants/routes';
import Header from './components/Header/Header';
import coffeeLoader from './assets/coffee-bean.png';

import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';


import {getProducts} from './redux/actions/products'

const HomePage = lazy(()=>import('./pages/HomePage.js'))
const DetailPage = lazy(() => import('./pages/DetailPage.js'))
const LoginSignup = lazy(() => import('./pages/LoginSignup'))
const CartPage = lazy(() => import("./pages/Cart.js"));
const OrderPage = lazy(() => import("./pages/Orders.js"));

function App() {
  const [currentId,setCurrentId] =useState(null)
  const dispatch = useDispatch();

  useEffect(() => {
    //as soon as the 'action getProducts()' is dispatched the 'FETCH_ALL' case in the productsReducer is activated,then a call is made to the api endpoint which returns the products from the DB.
    dispatch(getProducts())
  }, [currentId,dispatch]);

  return (
    <Router>
      <Suspense
        fallback={
          <div className="suspense">
            <img
              src={coffeeLoader}
              alt="box of coffee"
              className="suspense-image"
            />
          </div>
        }
      >
        <Switch>
          <CurrentContext.Provider value={currentId}>
            <SetContext.Provider value={setCurrentId}>
              <Route exact path={ROUTES.HOMEPAGE}>
                <Header />
                <HomePage />
              </Route>
              <Route path={ROUTES.DETAIL_PAGE}>
                <Header />
                <DetailPage />
              </Route>
              <Route path={ROUTES.CART_PAGE}>
                <Header />
                <CartPage />
              </Route>
              <Route path={ROUTES.ORDERS}>
                <Header />
                <OrderPage />
              </Route>
              <Route path={ROUTES.LOGIN_SIGNUP} component={LoginSignup} />
              <Route path={ROUTES.ADMIN_LOGIN}>
                <AdminLogin />
              </Route>
              <Route path={ROUTES.ADMIN_DASHBOARD}>
                <Dashboard />
              </Route>
            </SetContext.Provider>
          </CurrentContext.Provider>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
