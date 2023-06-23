import SideBar from "../components/SideBar"
import {Link} from "react-router-dom"
import { FormContext } from "../context"
import {useContext} from "react"


const Summary = () => {
const {billingType, monthly, checked} = useContext<any>(FormContext)

const totalCheck = checked.filter((check: any) => check.status).reduce((total:number, check:any) => (
 total + (monthly ? check.amount : check.amount * 10)
), 0)

  return (
    <div className="bg-green-50 flex flex-col justify-between md:bg-white h-screen md:justify-normal md:flex-row gap">
      <SideBar/>
      <div className="absolute top-28 mx-8  md:relative md:top-0 md:mx-0 md:flex md:justify-center md:items-start md:pt-16 md:w-[75vw] shadow-md md:shadow-none">
        <div className="px-7 py-10 rounded-2xl md:px-0 md:py-0 md:rounded-none md:w-[40vw] bg-white lg:w-[45vw]">
        <p className="text-3xl md:text-4xl text-[#02162e] font-bold pb-2">Finishing up</p>
            <p className="text-lg md:text-[16px] text-black/40 pb-10 font-medium">Double check everything looks OK before confirming</p>

            <div className="p-6 bg-gray-100 rounded-lg">
              <div className="flex justify-between items-center pb-5 border-b border-gray-300">
              <div className="flex flex-col gap-1">
                <p className="text-[#02162e] font-bold">{billingType.type}({monthly ? ("monthly") : ("yearly")})</p>
                <Link to="/plan"><p className="text-sm underline font-medium text-gray-500/50 hover:text-purple-800">Change</p></Link>
              </div>
              <p className="text-[#02162e] font-bold">${billingType.amount}/{monthly?"mo" : "yr"}</p>
              </div>

             { checked.filter((check: any) => check.status).map((check: any) => {
             return <div className="flex justify-between items-center py-3" key={check.title}>
              <div className="flex flex-col gap-1">
                <p className="text-black/40 font-bold">{check.title}</p>
              </div>
              <p className="text-[#02162e] font-bold">${monthly ? check.amount : check.amount * 10}/{monthly?"mo" : "yr"}</p>
              </div>
            })
              }
            </div>

            <div className="p-7 flex justify-between items-start">
              <p className="text-black/40 font-bold">Total({monthly? "per month" : "per year"})</p>
              <p className="text-lg font-bold text-[#08009e]">+${billingType.amount + totalCheck}/{monthly?"mo" : "yr"}</p>
            </div>

            <div className="hidden md:flex justify-between items-center md:mt-16 lg:mt-24">
            <Link to="/add-on" className="text-gray-500">Go back</Link>
            <Link to="/thank-you" className="bg-[#08009e] rounded-md px-8 py-3 text-white hover:opacity-90">Continue</Link>
          </div>
        </div>
      </div>
      <div className="bg-white py-4 px-6 flex justify-between items-center md:hidden">
            <Link to="/add-on" className="text-gray-500">Go back</Link>
            <Link to="/thank-you" className="bg-[#08009e] rounded-md px-8 py-3 text-white hover:opacity-90">Continue</Link>

        </div>
    </div>
  )
}

export default Summary
