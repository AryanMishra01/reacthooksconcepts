import React, {useState} from 'react'

const BasicForm = () => {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) =>{
        e.preventDefault();
          
        if (email && password) {
             // const newEntry = {id: new Date().getTime.toString(), email: email, password: password};
       //AFTER ECMA 2015 ,OBJECT DESTRUCTURING: if both the key and value are same no need to right again therefore we can write::
        const newEntry = {id: new Date().getTime().toString(), email, password};
        setAllEntry([ ...allEntry, newEntry]);
        console.log(allEntry);

        setEmail("");
        setpassword("");
        } else {
            alert("Enter Data in the fields")
        }
    }
    return ( 
        <> 
        <form action="" onSubmit={submitForm}> 
        <>
            <lable htmlFor="email">Email</lable>
            <input type="text" name="email" id="email" autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value) }
            />
        </>
        <>
            <lable htmlFor="password">Password</lable>
            <input type="text" name="password" id="password" autoComplete="off"
                 value={password}
                 onChange={(e) => setpassword(e.target.value) }
            />
        </>

        <button type="submit">Login</button>
        </form>
            <>
                {
                    allEntry.map((curElem) => {
                        //object destructing
                        const{id, email,password} = curElem;
                        return (
                            /* <div className="showDataStyle" key={curElem.id} > */
                            <div className="showDataStyle" key={id} >
                            {/* <p>{curElem.email}</p>
                            <p>{curElem.password}</p> */}
                            <p>{email}</p>
                            <p>{password}</p>
                            </div>
                        )
                    })
                }
            </>
        </>
    )
}

export default BasicForm