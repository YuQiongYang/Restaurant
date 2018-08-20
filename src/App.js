import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

class App extends Component {
  render() {
    let {routes} = this.props
    return (
     <div>  
      {this.props.children}
     </div>
    )
  }
}


export default App;
