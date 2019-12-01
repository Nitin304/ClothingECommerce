import React from 'react';
import {Switch,Route} from 'react-router-dom';

import {HomePage} from './pages/homePage/homePage.component';
import Shop from './pages/shop-page/shop.component';

import Header from './components/header/header.component';

import './App.css'
function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={Shop}></Route>
      </Switch>
   </div>
  );
}

export default App;
