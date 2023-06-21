import { FormContext } from "../context"
import { useContext } from "react"
import SideBar from "../components/SideBar"
import {useNavigate} from "react-router-dom"

const Info = () => {
    const {state, dispatch}: any = useContext(FormContext)
    const navigate = useNavigate()
  

    const validateForm = () => {
        if(state.displayName === "" || state.email === "" || state.number === ""){
        dispatch({type: "validateInfo"})
        }else{

                navigate("/plan");
              
        }
        
    }

  return (
    <div className="flex gap">
      <SideBar/>
      <div className="flex justify-center items-start pt-16 w-[75vw]">
        <div className="md:w-[40vw] lg:w-[45vw]">
            <p className="text-4xl text-blue-950 font-bold pb-2">Personal info</p>
            <p className="text-black/40 pb-10 font-medium">Please provide your name, email address, and phone number.</p>

            <form className="flex flex-col gap-7">
                <div className="flex flex-col">
                <div className="flex justify-between items-center">
                <label htmlFor="name" className="pb-1 text-blue-950 font-medium ">Name</label>
                {state.displayNameError && (
                    <p className="text-red-600 font-medium">{state.displayNameError}</p>
                )}
                </div>
                <input type="text" id="name" placeholder="e.g. Stephen King" className="border border-gray-300 p-3 rounded-md ml-2 outline-none" onChange={(e) => {
                    dispatch({type: "setName", payload: e.target.value})
                    dispatch({type: "clearNameErrorMsg"})
                }}
                />
                </div>

                <div className="flex flex-col">
                <div className="flex justify-between items-center">
                <label htmlFor="email" className="pb-1 text-blue-950 font-medium">Email Address</label>
                {state.emailError && (
                    <p className="text-red-600 font-medium">{state.emailError}</p>
                )}
                </div>
                <input type="text" id="email" placeholder="e.g. stephenking@lorem.com" className="border border-gray-300 p-3 rounded-md ml-2 outline-none"
                onChange={(e) => {
                    dispatch({type: "setEmail", payload: e.target.value})
                    dispatch({type: "clearEmailErrorMsg"})
                }}/>
                </div>

                <div className="flex flex-col">
                <div className="flex justify-between items-center">
                <label htmlFor="number" className="pb-1 text-blue-950 font-medium">Phone Number</label>
                {state.numberError && (
                    <p className="text-red-600 font-medium">{state.numberError}</p>
                )}
                </div>
                <input type="tel" id="number" placeholder="e.g. +1 234 567 890" className="border border-gray-300 p-3 rounded-md ml-2 outline-none" onChange={(e) => {
                    dispatch({type: "setNumber", payload: e.target.value})
                    dispatch({type: "clearNumberErrorMsg"})
                }}/>
                </div>
            </form>

            <div className="flex justify-end">
            <button className="bg-blue-950 rounded-md text-white px-8 py-3 md:mt-16 lg:mt-24 hover:opacity-90" onClick={validateForm}>Next Step</button>
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default Info
