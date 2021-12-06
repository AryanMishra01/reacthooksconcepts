import React, { createContext } from "react";
import BasicForm from "./component/forms/BasicForm";
import ShotCircuitEval from "./component/ShortCircuitEval";
//import RulesHooks from './component/RulesHooks';
import UseStateArray from "./component/UseStateArray";
import UseStateArrayTODOlist from "./component/UseStateArrayTODOlist";
import UseStateObject from "./component/UseStateObject";
import UseEffect from "./component/forms/UseEffects";
import UseEffectCleanUpFuntion from "./component/forms/UseEffectsCleanUpFunction";
import UseEffectAPI from "./component/forms/UseEffectAPI";
import Uncontrolled from "./component/forms/uncontrolled";
import UseReducer from "./component/useReducer";
import ComponentA from "./component/ComponentA";
// (3rd STEP) of using react router dom
import { Route, Switch } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
//Navbar
import Navbar from "./component/Navbar";
import Home from "./component/myapp/home";

//using context API using App.js , Component A, B and C
const FirstName = createContext();
const LastName = createContext();

const App = () => {
  //  console.log(useState('Aryan Mishra'));
  // let myFirstVal = useState('Aryan')[0];
  //console.log(myFirstVal)

  // const [myName, setMyName] = useState('Varun');

  // const changeName = () => {
  //     let val = myName;
  //     // if (val === 'Varun') {
  //     //     setMyName('Aryan Mishra')
  //     // } else {
  //     //     setMyName('Varun')
  //     // }
  //   val === 'Varun' ? setMyName('Aryan Mishra') : setMyName('Varun');
  // }
  // console.log(myName)

  return (
    <div>
      {/* <h1> {myName} </h1>
            <button className="btn" onClick={changeName} >Click Me</button> */}

      {/* <RulesHooks/> */}

      {/* <UseStateArray/> */}
      {/* <UseStateObject/> */}

      {/* <UseStateArrayTODOlist/> */}

      {/* <ShotCircuitEval/> */}

      {/* <BasicForm/> */}
      {/* <UseEffect/> */}
      {/* <UseEffectCleanUpFuntion/> */}
      {/* <UseEffectAPI/> */}
      {/* <Uncontrolled/> */}
      <UseReducer/>

      {/* 
      <FirstName.Provider value={"Aryan"}>
        <LastName.Provider value={"Mishra"}>
        <ComponentA />
        </LastName.Provider>
      </FirstName.Provider> */}

    {/* <Navbar/>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch> */}

      {/* <Home/> */}
      
    </div>
  );
};

// Route has an attribute PATH, COMPONENT, EXACT
//   <Route path='/' />:  Forward Slash means HOME PAGE
// SWITCH: only 1 component will be visibile At a time: first matched path will be visibile
// EXACT: it will ensure only the called path's component is called

export default App;
export { FirstName, LastName };
