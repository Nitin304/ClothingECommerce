import React from 'react';
import {Switch,Route} from 'react-router-dom';

import {HomePage} from './pages/homePage/homePage.component';
import Shop from './pages/shop-page/shop.component';
import Header from './components/header/header.component';
import SignAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth,createUserProfileDocument} from './firebase/firebase.util';


import './App.css'
class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unSubscribeFromAuth = null;

  componentDidMount(){
   this.unSubscribeFromAuth =  auth.onAuthStateChanged(async user=>{
      
      createUserProfileDocument(user);
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (
        <div>
          <Header currentUser={this.state.currentUser}></Header>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/shop" component={Shop}></Route>
            <Route exact path="/signIn" component={SignAndSignUp}></Route>

          </Switch>
      </div>
    );
  }
}

export default App;
