import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Nabvar from './Nabvar';
import Services from './Services';
import User from './User';
import Search from './Search';
import './style.css'

const Router = () => {
    const Name = () => {
        return <h2>Name Page</h2>
    }

    return (
        <>
            <Nabvar />
            <Switch>
                <Route exact path="/" component={() => <About name='About'/>} />
                <Route exact path="/contact" render={() => <Contact name='Contact'/>} />
                <Route path="/contact/name" component={Name} />
                <Route path="/services" component={Services} /> 
                <Route path="/search" component={Search} /> 
                {/* <Route path="/user/:name" component={User} /> */}
                <Route path="/user/:fname/:lname" component={User} />
                <Route component={Error} />
                {/* <Redirect to="/contact"/> */}
            </Switch>
        </>
    )
}
// /user/:fname called params
export default Router;