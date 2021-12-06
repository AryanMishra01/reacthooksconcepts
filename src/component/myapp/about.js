import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const history = useHistory();

  //useLocation:: It returns the "location" object that represents the current URL
  //We can think about it like a useState that returns a new location whenever the URL changes

  //useHistory:: It returns the previous location
        // ()=>history.push('/index'): this is used to redirect to any page
                // you need to create fat arow function to use it as shown below

  // in H1 tag: we are getting the path name dynamically
  return (
    <div>
      <h1>Hello {location.pathname.replace("/", "")} page</h1>
      {location.pathname === "/about/aryan" ? (
        <p>Hi, Aryan Good to see you again</p>
      ) : (
        <p>Login to see your files</p>
      )}

      <button
        className="btn btn-primary"
        onClick={() => history.push("/index")}
      >
        Home Page
      </button>
    </div>
  );
};

export default Index;
