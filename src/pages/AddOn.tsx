import SideBar from "../components/SideBar"
import {useNavigate} from "react-router-dom"
import {useContext} from "react"
import { FormContext } from "../context"

const AddOn = () => {
  const navigate = useNavigate()
  const {billing} = useContext(FormContext)

const {monthly, yearly} = billing

  return (
    <div className="bg-green-50 flex flex-col justify-between md:bg-white h-screen md:justify-normal md:flex-row gap">
      <SideBar/>
      <div className="absolute top-28 mx-8  md:relative md:top-0 md:mx-0 md:flex md:justify-center md:items-start md:pt-16 md:w-[75vw] shadow-md md:shadow-none">
        <div className="px-7 py-10 rounded-2xl md:px-0 md:py-0 md:rounded-none md:w-[40vw] bg-white lg:w-[45vw]">
        <p className="text-3xl md:text-4xl text-blue-950 font-bold pb-2">Pick add-ons</p>
            <p className="text-lg md:text-[16px] text-black/40 pb-10 font-medium">Add-ons help enhance your gaming experience.</p>

            <div className="hidden md:flex justify-end">
            <button className="bg-blue-950 rounded-md text-white px-8 py-3 md:mt-16 lg:mt-24 hover:opacity-90" onClick={() => navigate("/plan")}>Next Step</button>
          </div>
        </div>
      </div>
      <div className="bg-white py-5 px-6 flex justify-end md:hidden">
            <button className="bg-blue-950 rounded-md text-white px-8 py-3 md:mt-16 lg:mt-24 hover:opacity-90" onClick={() => navigate("/plan")}>Next Step</button>
        </div>
    </div>
  )
}

export default AddOn
