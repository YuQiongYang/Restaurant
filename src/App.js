import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Home from './components/pages/home'
import Login from './components/pages/login'

class App extends Component {
  render() {
    let {routes} = this.props
    return (
      <div className="App">
        <Switch>
          {
            routes.map(({id, path, component, render, exact })=>(
              <Route key = {id} 
              exact = {exact} 
              path = {path} 
              component ={component} 
              render = {render}
              />            
            ))
          }
        </Switch>
      </div>
    );
  }
}

App.defaultProps = {
  routes: [
    {id: 1, path: '/', component: Home, exact: true },
    {id: 2, path: '/login', component: Login,exact: true }
  ]
}

export default App;
