type formPropType = {
    displayName: string
    email: string
    number: string
    errorMsg: string
}

type billingPropType ={
    monthly: boolean
    yearly: boolean
    billingType: {
        type: string
        amount: number
    }
    checked: [
        {
            status: boolean
            tiile: string
            amount: number
        }
    ]
    setBillingType: (value: {type:string, amount:string}) => void
    setMonthly: (value: boolean) => void
    setYearly: (value: boolean) => void
    setChecked: (value: [{status: boolean, title: string, amount: number}]) => void
}

type actionType =
| { type: "setName"; payload: string }
| { type: "setEmail"; payload: string }
| { type: "setNumber"; payload: string }
| { type: "validateInfo"}
| { type: "clearNameErrorMsg" }
| { type: "clearEmailErrorMsg" }
| { type: "clearNumberErrorMsg" };

type FormContextType = {
    state: formPropType;
    dispatch: Dispatch<actionType>;
    billing: billingPropType;
};

import React, { createContext, useReducer, Dispatch , useState} from "react";


const FormContext = createContext<FormContextType| null>(null);

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
    const [monthly, setMonthly] = useState(true)
    const [yearly, setYearly] = useState(false)
    const [billingType, setBillingType] = useState({
        type: "Arcade",
        amount: monthly ? 9 : 90
    })
    const [checked, setChecked] = useState([
       {status:true,
        amount: monthly ? 1 : 10,
        title: "Online service"}, 
        {status:true,
        amount: monthly ? 2 : 20,
        title: "Larger storage"},
        {status:false,
        amount: monthly ? 1 : 10,
        title: "Customizable profile"}
      ])

    const billing = { monthly, yearly, setMonthly, setYearly, billingType, setBillingType, checked, setChecked}
    

    
    return(
        <FormContext.Provider value={{state, dispatch, billing}}>
            {children}
        </FormContext.Provider>
    )
}

export {FormContext, FormProvider}