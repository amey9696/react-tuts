import React from 'react';
import { NavLink } from 'react-router-dom';

const Nabvar = () => {
    return (
        <>
            <nav >
            {/* power of ReactDOM i.e without refreshing page send on other link/tag/page*/}
            {/* it is called as single page application */}
            {/* <h3>Power Of ReactDOM (to see power click on below link and see page refresh or not?)</h3> */}
            <NavLink exact className="navbar" activeClassName="active_class" to="/">About Us</NavLink>
            <NavLink exact className="navbar" activeClassName="active_class" to="/contact">Contact Us</NavLink>
            <NavLink exact className="navbar" activeClassName="active_class" to="/services">Services</NavLink>
            {/* <NavLink exact className="navbar" activeClassName="active_class" to="/user">User</NavLink> */}
            {/* <NavLink exact className="navbar" activeClassName="active_class" to="/user/amey">User</NavLink> */}
            <NavLink exact className="navbar" activeClassName="active_class" to="/search">Search</NavLink>
            <NavLink exact className="navbar" activeClassName="active_class" to="/user/amey/palshetkar">User</NavLink>

            </nav>
            {/* <br/> */}
            {/* normal anchor tag, i.e page refreshed */}
            {/* <h3>Normal Anchor tag (page refreshing)</h3>
            <a href="/">About Us</a>
            <a href="/contact">Contact Us</a> */}
        </>
    )
}

export default Nabvar
