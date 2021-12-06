import React from "react";
//import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <NavLink exact activeClassName="active_class" to="/">About us</NavLink>
      <NavLink exact activeClassName="active_class" to="/contact">Contact us</NavLink> 
      <br/>

      {/* <Link to="/">About us</Link>
      <Link to="/contact">Contact us</Link> */}

      <br />

      {/* <a href="/">About us</a> 
                <br/>
                <a href="/contact">Contact</a>
        */}
    </>
    //LINK
    // In react rouder dom: we use Link for navigation
    // TO: is used to provide path to redirect
    // similar as anchor tag and using href: (demerit):in this case whole page loads

    //NavLink
    //This has addition attribute: activeClassName
    // this enables to add css to show which class is active
        //EXACT: property used to apply css classes exactly to the one which is clicked

    // using active_class: just to select whole text.
  );
};

export default Navbar;
