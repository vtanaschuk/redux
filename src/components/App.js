import Counter from "./Counter";
import React from "react";
import {createStore} from "redux";
import reducer from "../reducer";
const store = createStore(reducer)
const App = () =>{
    return(
        <Counter />
    )
}
export default App;