import React from 'react'
import { render } from 'react-dom'

// router
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
// redux
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import reducers from './reducers'

let store = createStore(reducers, applyMiddleware(thunk));

/* Import Components */
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import "./style.css";

const PrivateRoute = ({ component: Component , ...rest}) => (
  <Route 
    {...rest}
    render={props =>
      localStorage.getItem('username') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
		<Switch>
        <Route path="/login" component={Login}/>
		<Route path="/register" component={Register}/>
        <PrivateRoute exact path="/" component={Dashboard}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>), document.getElementById('root'));