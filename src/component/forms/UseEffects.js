import React, {useEffect, useState} from 'react';
import UseTitleCount from './githubApiProject/UseTitleCount';
// it is called automatically when the page loads
const UseEffect = () => {
        const [countNum, setcountNum] = useState(0);

        //CUSTOM HOOK: UseTitleCount.js
            UseTitleCount(countNum)

    //dependencyList [] : running useEffect conditonally 
    //we can use multiple useEffects
    useEffect( () => {
        console.log("second useEffect");
    }, []);  // blank dependencyList means only it will run for the first time 

    //this will execute first
    console.log("Hello outside the useEffect")
    return (
        <>
    <h1>{countNum}</h1>
    <button onClick={
        () => setcountNum(countNum +1)
    }>Click to increase Count</button>
        </>
    )
}

export default UseEffect