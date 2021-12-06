import React from 'react'

const UseStateObject = () => {
    const [myObj, setmyObj] = React.useState({
        myName:"Aryan", myAge: 26, Degree: "BTech"
    });

    const changeObject = () => {
        setmyObj({...myObj, myName: "Varun" });
    }
    return (
        <div>
            <h1 className="h1style">Name: {myObj.myName} & Age: {myObj.myAge} & Degree: {myObj.Degree}</h1>
            <button className="btn" onClick={changeObject}> Update </button>
        </div>
    )
}

export default UseStateObject
