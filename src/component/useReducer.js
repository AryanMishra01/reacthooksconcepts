import React, {useReducer} from "react"

const initialState = 0;
//reducer are pure funtion take two parameters
// state and action
 // It take in a state  and action and return a new state
//always return something
// It always returns the same output if the same arguments are passed in.
const reducer = (state,  action) => {
    console.log(state,action)
    if(action.type === "INCREMENT") {
        return state + 1;
    }
    if(action.type === "DECREMENT") {
        return state - 1;
    }
    return state;
}

const UseReducer = () => {

    //useReducer takes two arguments i.e. Reducer function and initial state
    // does not produce any side-effects
    // useReducer returns two element of an ARRAY:
    //i.e state:current state and dispatch: to trigger ACTION method
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
        <div>
            <p>{state}</p>
            <div>
                <button onClick={() => dispatch({type: "INCREMENT"})} > Inc</button>
                <button onClick={() => dispatch({type: "DECREMENT"})} > Dec</button>
            </div>
        </div>
        </>
    )
}

export default UseReducer



//USING USE-STATE
// import React, {useState} from "react"

// const UseReducer = () => {
//     const [count, setCount] = useState(0);
//     return (
//         <>
//         <div>
//             <p>{count}</p>
//             <div>
//                 <button onClick={() => setCount(count + 1)} > Inc</button>
//                 <button onClick={() => setCount(count - 1)} > Dec</button>
//             </div>
//         </div>
//         </>
//     )
// }

// export default UseReducer