import React, { useEffect, useState } from "react";
import Loading from "./githubApiProject/loading";
import GithubUsers from "./githubApiProject/githubUsers";


const UseEffectAPI = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
      //error handling
    try {
        setLoading(false);
        const response = await fetch(
            "https://api.github.com/users"
          );
          setUsers(await response.json());
          // const data = await response.json();
          //console.log(data);
          //console.log(users);
    } catch (error) {
        console.log( 'my error is' + error);
    }
 
  };



  useEffect(() => {
      //cannot use async and await inside useEffect
    getUsers();
  }, []);

  if(loading) {
      return <Loading/>
  }

  return (
    // we can pass data with component using props
    //using props "users" in component 
    <>
      <GithubUsers users={users}/>
    </>
  );
};

export default UseEffectAPI;

 