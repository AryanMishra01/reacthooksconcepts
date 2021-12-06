import React, {useState} from 'react'   

const ShotCircuitEval = () => {
    const [demo, setdemo] = useState("");
    return (
        <div>
            <h1 className="h1style"> {demo || 
             <>
             <h1>Mast </h1>
             <p> you can do anything </p>
             </>
             }</h1>
            <h1 className="h1style"> {demo && "Aryan"}</h1>
        </div>
    )
}

export default ShotCircuitEval

// we can do multiple renders with the help of ||(OR) and &&(AND) operator is termed as short circuit evaluation in react 

