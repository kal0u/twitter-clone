import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider} from 'react-redux'
import store from './store'
import Main from './component/Layout/main'
import Home from './component/Home'
import Register from './component/auth/Register'
import Login from './component/auth/Login'
import Profile from './component/Profile/Profile'
import NotFound from './component/NotFound'
import jwt_decode from 'jwt-decode';
import setAuthHeader from './utils/setAuthHeader'
import { logoutUser, getCurrentUser } from './actions/authActions'
import Search from './component/search/notFound'
if (localStorage.getItem('jwtToken')) {
  const currentTime = Date.now() / 1000
  const decode = jwt_decode(localStorage.getItem('jwtToken'))
  if(currentTime > decode.exp) {
    store.dispatch(logoutUser())
  } else {
    setAuthHeader(localStorage.getItem('jwtToken'))
    store.dispatch(getCurrentUser())
  }
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div >
        <BrowserRouter>
          <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile/:userId" component={Profile} />
            <Route path="/search" component={Search} />
            <Route component={NotFound} />

          </Switch>
          </Main>
        </BrowserRouter>
      </div >
      </Provider>
    );
  }
}

export default App;
