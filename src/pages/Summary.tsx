import SideBar from "../components/SideBar"
import {Link} from "react-router-dom"


const Summary = () => {
  return (
    <div className="bg-green-50 flex flex-col justify-between md:bg-white h-screen md:justify-normal md:flex-row gap">
      <SideBar/>
      <div className="absolute top-28 mx-8  md:relative md:top-0 md:mx-0 md:flex md:justify-center md:items-start md:pt-16 md:w-[75vw] shadow-md md:shadow-none">
        <div className="px-7 py-10 rounded-2xl md:px-0 md:py-0 md:rounded-none md:w-[40vw] bg-white lg:w-[45vw]">
        <p className="text-3xl md:text-4xl text-blue-950 font-bold pb-2">Finishing up</p>
            <p className="text-lg md:text-[16px] text-black/40 pb-10 font-medium">Double check everything looks OK before confirming</p>

            <div className="hidden md:flex justify-between items-center md:mt-16 lg:mt-24">
            <Link to="/add-on" className="text-gray-500">Go back</Link>
            <Link to="/summary" className="bg-purple-950 rounded-md px-8 py-3 text-white hover:opacity-90">Continue</Link>
          </div>
        </div>
      </div>
      <div className="bg-white py-4 px-6 flex justify-between items-center md:hidden">
            <Link to="/add-on" className="text-gray-500">Go back</Link>
            <Link to="/summary" className="bg-purple-950 rounded-md px-8 py-3 text-white hover:opacity-90">Continue</Link>

        </div>
    </div>
  )
}

export default Summary
