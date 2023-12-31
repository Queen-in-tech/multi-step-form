import SideBar from "../components/SideBar"
import {Link} from "react-router-dom"
import {useContext, useState} from "react"
import { FormContext } from "../context"


const Plan = () => {
const {monthly, setMonthly, yearly, setYearly, setBillingType} = useContext<any>(FormContext)
const [selected, setSelected] = useState([
  {first: true},
  {second: false},
  {third: false}
])


  return (
    <div className="bg-[#f0f6ff] flex flex-col justify-between md:bg-white h-screen md:justify-normal md:flex-row gap">
      <SideBar/>
      <div className="absolute top-[6.5rem] mx-8  md:relative md:top-0 md:mx-0 md:flex md:justify-center md:items-start md:pt-16 md:w-[75vw] shadow-md md:shadow-none">
        <div className="px-7 pt-8 pb-4 rounded-2xl md:px-0 md:py-0 md:rounded-none md:w-[40vw] bg-white lg:w-[45vw]">
        <p className="text-3xl md:text-4xl text-[#02162e] font-bold pb-2">Select your plan</p>
            <p className="text-lg md:text-[16px] text-black/40 pb-7 font-medium">You have the option of monthly or yearly billing</p>

            <div className="">
            <div className="flex-col flex sm:flex-row gap-5">
              <div className={`w-full sm:w-[9.4rem] h-auto px-5 py-5 border rounded-xl flex sm:flex-col sm:justify-between cursor-pointer gap-5 sm:gap-10 hover:border-[#08009e]  ${monthly ? "items-center sm:items-start" : "items-start"} ${selected[0].first ? "border-[#08009e] bg-blue-50/50" : "border-gray-300 "} transition duration-500 ease-in-out`} onClick={
                () => {
                    setBillingType({
                    type: "Arcade",
                    amount: monthly ? 9 : 90
                  })
                  setSelected([
                    {first: true},
                    {second: false},
                    {third: false}
                  ])
                }
              }> 
                <img src="icon-arcade.svg" alt=""  className="w-10 h-10"/>
                <div>
                <p className="font-bold text-[#02162e]">Arcade</p>
                <p className="text-black/40 font-medium">{monthly ? "$9/mo" : "$90/yr"}</p>
                {yearly && ( <p className="text-[#02162e] text-sm font-medium">2 months free</p> )}
                </div>
              </div>

              <div className={`w-full sm:w-[9.4rem] h-auto px-5 py-5 border rounded-xl flex sm:flex-col sm:justify-between cursor-pointer gap-5 sm:gap-10 hover:border-[#08009e]  ${monthly ? "items-center sm:items-start" : "items-start"} ${selected[1].second ? "border-[#08009e] bg-blue-50/50" : "border-gray-300 "} transition duration-500 ease-in-out`}onClick={
                () => {
                    setBillingType({
                    type: "Advanced",
                    amount: monthly ? 12 : 120
                  })
                  setSelected([
                    {first: false},
                    {second: true},
                    {third: false}
                  ])
                }
              }> 
                <img src="icon-advanced.svg" alt=""  className="w-10 h-10"/>
                <div>
                <p className="font-bold text-[#02162e]">Advanced</p>
                <p className="text-black/40 font-medium">{monthly ? "$12/mo" : "$120/yr"}</p>
                {yearly && ( <p className="text-[#02162e] text-sm font-medium">2 months free</p> )}
                </div>
              </div>

              <div className={`w-full sm:w-[9.4rem] h-auto px-5 py-5 border rounded-xl flex sm:flex-col sm:justify-between cursor-pointer gap-5 sm:gap-10 hover:border-[#08009e]  ${monthly ? "items-center sm:items-start" : "items-start"} ${selected[2].third ? "border-[#08009e] bg-blue-50/50" : "border-gray-300 "} transition duration-500 ease-in-out`} onClick={
                () => {
                    setBillingType({
                    type: "Pro",
                    amount: monthly ? 15 : 150
                  })
                  setSelected([
                    {first: false},
                    {second: false},
                    {third: true}
                  ])
                }
              }> 
                <img src="icon-pro.svg" alt=""  className="w-10 h-10"/>
                <div>
                <p className="font-bold text-[#02162e]">Pro</p>
                <p className="text-black/40 font-medium">{monthly ? "$15/mo" : "$150/yr"}</p>
                {yearly && ( <p className="text-[#02162e] text-sm font-medium">2 months free</p> )}
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-3 flex justify-center items-center gap-7 mt-9 rounded-xl">
              <p className={`font-bold ${monthly ? "text-[#02162e]" : "text-gray-400"}`}>Monthly</p>
              <div className="w-14 h-7 flex justify-start items-center pl-1 bg-[#02162e] rounded-2xl cursor-pointer" onClick={
                () => {
                  setMonthly(!monthly)
                  setYearly(!yearly)
                }
              }>
                <p className={`bg-white w-5 h-5 rounded-full text-center text-white ${yearly && "translate-x-7"} transition duration-300 ease-in-out`}>.</p>
              </div>
              <p className={`font-bold ${yearly ? "text-[#02162e]" : "text-gray-400"}`}>Yearly</p>
            </div>
            </div>
            <div className="hidden md:flex justify-between items-center md:mt-16 lg:mt-24">
            <Link to="/" className="text-gray-500">Go back</Link>
            <Link to="/add-on" className="bg-[#02162e] rounded-md px-8 py-3 text-white hover:opacity-90">Next Step</Link>
            </div>
        </div>
      </div>
      <div className="bg-white py-4 px-6 flex justify-between items-center md:hidden">
            <Link to="/" className="text-gray-500">Go back</Link>
            <Link to="/add-on" className="bg-[#02162e] rounded-md px-8 py-3 text-white hover:opacity-90">Next Step</Link>
        </div>
    </div>
  )
}

export default Plan
