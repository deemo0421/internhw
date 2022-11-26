import React from "react";
import { useState } from "react";
const DetailContext = React.createContext([{}, ()=>{}]);

let initialState = {}
const DetailProvider = props => {
    const [state, setState] = useState(initialState)
    return(
        <DetailContext.Provider value = {[state, setState]}>
            {props.children}
        </DetailContext.Provider>
    ) 
}
export {DetailContext, DetailProvider};