import React, {useRef, useState} from "react";

const Uncontrolled = () => {

    //useRef:::: it is like useState only 
    //its preserves the value 
    //no re-render
    //const ref = useRef(initialValue)
 
    const luckyName = useRef(null)
    const[show,setShow] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        const name= luckyName.current.value;
        name === "" ? alert("Please fill the data") : setShow(true);
    }

  return (
    <>
      <div>
        <form action=" " onSubmit={submitForm}>
            <div>
                <label htmlFor="luckyName">Enter you Lucky Name</label>
                <input type="text" id="luckyName" ref={ luckyName }/>
            </div>
            <br/>
            <button>Submit</button>
        </form>
        <p>{show ? `Your Lucky Name is ${luckyName.current.value}` : " "}</p>
      </div>
    </>
  );
};

export default Uncontrolled;
