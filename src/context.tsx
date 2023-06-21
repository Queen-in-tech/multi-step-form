type formPropType = {
    displayName: string
    email: string
    number: string
    errorMsg: string
}

type actionType =
| { type: "setName"; payload: string }
| { type: "setEmail"; payload: string }
| { type: "setNumber"; payload: string }
| { type: "validateInfo"}
| { type: "clearNameErrorMsg" }
| { type: "clearEmailErrorMsg" }
| { type: "clearNumberErrorMsg" };



import React, { createContext, useReducer, Dispatch } from "react";

const FormContext = createContext<{ state: formPropType; dispatch: Dispatch<actionType> } | null>(null);

const initialState = {
    displayName: "",
    email: "",
    number: "",
    errorMsg: ""
}

const reducer = (state: formPropType, action: actionType) => {
    switch (action.type) {
        case "setName":
            return {...state, displayName: action.payload}
        case "setEmail":
            return {...state, email: action.payload}
        case "setNumber":
            return {...state, number: action.payload}
        case "validateInfo":
            const updatedState = { ...state };

            if (state.displayName === "") {
              return {
                ...updatedState,
                displayNameError: "This field is required",
              };
            } else if (state.email === "") {
              return { ...updatedState, emailError: "This field is required" };
            } else if (state.number === "") {
              return { ...updatedState,  numberError: "This field is required" };
            } else{
              return{...state}
            }

        case "clearNameErrorMsg":
             return {...state, displayNameError: ""};
        case "clearEmailErrorMsg":
             return {...state,  emailError: ""};
        case "clearNumberErrorMsg":
             return {...state, numberError: ""};
        default:
            return state;
    }
}




const FormProvider = ({children}: { children: React.ReactNode }) => {
   
    const [state, dispatch] = useReducer(reducer, initialState)
    
    return(
        <FormContext.Provider value={{state, dispatch}}>
            {children}
        </FormContext.Provider>
    )
}

export {FormContext, FormProvider}