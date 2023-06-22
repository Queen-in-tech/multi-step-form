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
    checked: {status: boolean, title: string, amount: number}[]
    setBillingType: (billingType: {
        type: string
        amount: number
    }) => void
    setMonthly: (monthly: boolean) => void
    setYearly: (yearly: boolean) => void
    setChecked: ( 
    checked: {status:boolean, title: string, amount: number}[]
    ) => void
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
};

import React, { createContext, useReducer, Dispatch , useState} from "react";


const FormContext = createContext<FormContextType| billingPropType |null>(null);

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
    const [monthly, setMonthly] = useState<billingPropType['monthly']>(true)
    const [yearly, setYearly] = useState<billingPropType['yearly']>(false)
    const [billingType, setBillingType] = useState<billingPropType['billingType']>({
        type: "Arcade",
        amount: monthly ? 9 : 90
    })

    const [checked, setChecked] = useState<billingPropType['checked']>([
        {status: true,
        amount: monthly? 1 : 10,
        title: "Online service"}, 
        {status: true,
        amount: monthly ? 2 : 20,
        title: "Larger storage"},
        { status: false,
        amount: monthly ? 2 : 20,
        title: "Customizable profile"}
      ])

    
    return(
        <FormContext.Provider value={{state, dispatch,  monthly, yearly, setMonthly, setYearly, billingType, setBillingType, checked, setChecked}}>
            {children}
        </FormContext.Provider>
    )
}

export {FormContext, FormProvider}