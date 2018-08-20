import  React, { Component } from 'react'

import { 
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom'

import App from '../App'

import Login from '../components/pages/login'
import Admin from '../components'

export default class extends Component{
    render(){
        return(
            <Router>
                <App>
                    <Switch>
                        <Route path="/login" component= {Login}></Route>
                        <Route path="/" component= {Admin}></Route>
                    </Switch>
                </App>
            </Router>
        )
    }
}