import React, { useState } from 'react'

const UseStateArray = () => {

    const bioData = [
        {
            id: 0, myName: "Aryan", age: 26
        }, {
            id: 1, myName: "Manas", age: 21
        }
    ]

    console.log(bioData);
    const [myArray, setmyArray] = useState(bioData);

    const clearArray =() => {
        setmyArray([]);
        // let arr = myArray;
        // arr === bioData ? setmyArray([]) : setmyArray(bioData);
    }

    return (
        <>
            {
                myArray.map((curElm) => <h1 className="h1style" key={curElm.id}> Name: {curElm.myName} & Age: {curElm.age}</h1>)

            }
            <button className="btn" onClick={clearArray}> Clear</button>
        </>
    )
}

export default UseStateArray