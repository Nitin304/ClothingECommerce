import React from 'react';
import {Switch,Route} from 'react-router-dom';

import {HomePage} from './pages/homePage/homePage.component';
const HatsPage = ()=>(
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
   <Switch>
    <Route exact path="/" component={HomePage}></Route>
    <Route exact path="/shop/hats" component={HatsPage}></Route>
   </Switch>
  );
}

export default App;
