import React, {useContext} from "react";
import { FirstName, LastName } from "../App";

//Context API with useContext
const ComponentC = ({}) => {
    const fName = useContext(FirstName) 
    const lName = useContext(LastName)

    return  <h1>My Name is {fName} {lName}</h1>
  }

  // BELOW : use of Context API with consumer 
    // <>
    //   <FirstName.Consumer>
    //     {(fname) => {
    //       return (
    //         <LastName.Consumer>
    //           {(lname) => {
    //             return (
    //               <p>
    //                 Component C, smallest child component <br />
    //                 <h1>
    //                   My Name is {fname} {lname}
    //                 </h1>
    //               </p>
    //             );
    //           }}
    //         </LastName.Consumer>
    //       );
    //     }}
    //   </FirstName.Consumer>
    // </>
//   );
// };

export default ComponentC;
