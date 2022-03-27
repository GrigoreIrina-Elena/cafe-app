import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/header';
import AddProduct from '../components/addProduct';
import CafeList from '../components/cafeList';
import localStorage from '../hooks/localStorage';
import EditCafe from '../components/editCafe';
import { Redirect } from 'react-router-dom';
import CafesContext from '../context/CafesContext';

const AppRouter = () => {
    const [cafes, setCafes] = localStorage('cafes', []);

    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="main-content">
            <CafesContext.Provider value={{cafes, setCafes}}>
                <Switch>
                    <Route component={CafeList} path="/" exact={true} />
                    <Route component={AddProduct} path="/add" />
                    <Route component={EditCafe} path="/edit/:id" />
                    <Route component={() => <Redirect to="/" />} />
                </Switch>
            </CafesContext.Provider>
          </div>
        </div>
      </BrowserRouter>
    );
  };
  
  export default AppRouter;