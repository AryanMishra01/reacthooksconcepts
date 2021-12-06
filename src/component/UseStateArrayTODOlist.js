import React, { useState } from 'react'

const UseStateArrayTODOlist = () => {

    const bioData = [
        {
            id: 0, myName: "Aryan", age: 26
        }, {
            id: 1, myName: "Manas", age: 21
        }, {
            id: 2, myName: "Varun", age: 25
        }
    ]

    console.log(bioData);
    const [myArray, setmyArray] = useState(bioData);

    const clearArray = () => {
        setmyArray([]);
        // let arr = myArray;
        // arr === bioData ? setmyArray([]) : setmyArray(bioData);
    }

    const removeElement = (id) => {
        // alert(id);
        const myNewArray = myArray.filter((curElm) => {
            return curElm.id !== id;
        })

        setmyArray(myNewArray);
    }

    return (
        <>
            {
                myArray.map((curElm) => {
                    return (
                        <h1 className="h1style" key={curElm.id}>
                            Name: {curElm.myName} & Age: {curElm.age}
                            <button onClick={() => removeElement(curElm.id)}> Remove </button>
                        </h1>
                    );
                })
            }
            <button className="btn" onClick={clearArray}> Clear</button>
        </>
    )
}

export default UseStateArrayTODOlist

