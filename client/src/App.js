import React from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Header from './components/Header/Header';
import coffeeLoader from './assets/coffee-bean.png';

import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';



const HomePage = lazy(()=>import('./pages/HomePage.js'))
const DetailPage = lazy(() => import('./pages/DetailPage.js'))
const LoginSignup = lazy(()=>import('./pages/LoginSignup'))

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="h-screen flex bg-gray-100 items-center justify-center">
            <img
              src={coffeeLoader}
              alt="box of coffee"
              className="animate-pulse w-auto h-20"
            />
          </div>
        }
      >
          <Switch>
          <Route exact path={ROUTES.HOMEPAGE}>
            <Header />
            <HomePage/>
            </Route>
          <Route path={ROUTES.DETAIL_PAGE}>
            <Header />
            <DetailPage/>
            </Route>
          <Route path={ROUTES.LOGIN_SIGNUP} component={LoginSignup} />
          <Route path={ROUTES.ADMIN_LOGIN}>
           <AdminLogin/>
          </Route>
          <Route path={ROUTES.ADMIN_DASHBOARD}>
             <Dashboard/>
          </Route>
          </Switch>
 
      </Suspense>
    </Router>
  );
}

export default App;
