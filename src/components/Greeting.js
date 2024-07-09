import React, {useState} from "react";
import Output from "./Output";
const Greeting = () =>{
  const [changeText,setChangeText] = useState(false);

  const changeTextHandler = () =>{
    setChangeText(true)
  }
  
  return(
    <div>
        <h1>Hello world</h1>
        {!changeText && <Output>its good to see you</Output> }
        {changeText && <Output>changed!</Output>}
        <button onClick={changeTextHandler} >Change Text!</button>
    </div>
  )
}

export default Greeting;