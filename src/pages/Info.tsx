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
    <div className="bg-green-50 flex flex-col justify-between md:bg-white h-screen md:justify-normal md:flex-row gap">
      <SideBar/>
      <div className="absolute top-28 mx-8  md:relative md:top-0 md:mx-0 md:flex md:justify-center md:items-start md:pt-16 md:w-[75vw] shadow-md md:shadow-none">
        <div className="px-7 py-10 rounded-2xl md:px-0 md:py-0 md:rounded-none md:w-[40vw] bg-white lg:w-[45vw]">
            <p className="text-3xl md:text-4xl text-[#02162e] font-bold pb-2">Personal info</p>
            <p className="text-lg md:text-[16px] text-black/40 pb-10 font-medium">Please provide your name, email address, and phone number.</p>

            <form className="flex flex-col gap-7">
                <div className="flex flex-col">
                <div className="flex justify-between items-center">
                <label htmlFor="name" className="pb-1 text-[#02162e] font-medium ">Name</label>
                {state.displayNameError && (
                    <p className="text-red-600 text-sm font-medium md:text-[16px]">{state.displayNameError}</p>
                )}
                </div>
                <input type="text" id="name" placeholder="e.g. Stephen King" className={`border p-3 rounded-md ml-2 outline-none ${state.displayNameError ? "border-red-500" : "border-gray-300" }`}
                     onChange={(e) => {
                    dispatch({type: "setName", payload: e.target.value})
                    dispatch({type: "clearNameErrorMsg"})
                }}
                />
                </div>

                <div className="flex flex-col">
                <div className="flex justify-between items-center">
                <label htmlFor="email" className="pb-1 text-[#02162e] font-medium">Email Address</label>
                {state.emailError && (
                    <p className="text-red-600 text-sm font-medium md:text-[16px]">{state.emailError}</p>
                )}
                </div>
                <input type="text" id="email" placeholder="e.g. stephenking@lorem.com" className={`border p-3 rounded-md ml-2 outline-none ${state.emailError ? "border-red-500" : "border-gray-300" }`}
                onChange={(e) => {
                    dispatch({type: "setEmail", payload: e.target.value})
                    dispatch({type: "clearEmailErrorMsg"})
                }}/>
                </div>

                <div className="flex flex-col">
                <div className="flex justify-between items-center">
                <label htmlFor="number" className="pb-1 text-[#02162e] font-medium">Phone Number</label>
                {state.numberError && (
                    <p className="text-red-600 text-sm font-medium md:text-[16px]">{state.numberError}</p>
                )}
                </div>
                <input type="tel" id="number" placeholder="e.g. +1 234 567 890" className={`border p-3 rounded-md ml-2 outline-none ${state.numberError ? "border-red-500" : "border-gray-300" }`} onChange={(e) => {
                    dispatch({type: "setNumber", payload: e.target.value})
                    dispatch({type: "clearNumberErrorMsg"})
                }}/>
                </div>
            </form>

            <div className="hidden md:flex justify-end">
            <button className="bg-[#02162e] rounded-md text-white px-8 py-3 md:mt-16 lg:mt-24 hover:opacity-90" onClick={validateForm}>Next Step</button>
            </div>
        </div>
      </div>
      <div className="bg-white py-5 px-6 flex justify-end md:hidden">
            <button className="bg-[#02162e] rounded-md text-white px-8 py-3 md:mt-16 lg:mt-24 hover:opacity-90" onClick={validateForm}>Next Step</button>
            </div>
    </div>
  )
}

export default Info
