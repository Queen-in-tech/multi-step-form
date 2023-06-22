import SideBar from "../components/SideBar"
import {Link} from "react-router-dom"
import {useContext} from "react"
import { FormContext } from "../context"

const AddOn = () => {
const {monthly, setChecked, checked} = useContext<any>(FormContext)

const handlecheck = (index: number) => {
  setChecked((prevState:any) => {
    const updatedState = prevState.map((item:any, i:any) => {
      if (i === index) {
        return { ...item, status: !item.status };
      }
      return item;
    });
    return updatedState;
  });
}

  return (
    <div className="bg-green-50 flex flex-col justify-between md:bg-white h-screen md:justify-normal md:flex-row gap">
      <SideBar/>
      <div className="absolute top-28 mx-8  md:relative md:top-0 md:mx-0 md:flex md:justify-center md:items-start md:pt-16 md:w-[75vw] shadow-md md:shadow-none">
        <div className="px-7 py-10 rounded-2xl md:px-0 md:py-0 md:rounded-none md:w-[40vw] bg-white lg:w-[45vw]">
        <p className="text-3xl md:text-4xl text-blue-950 font-bold pb-2">Pick add-ons</p>
            <p className="text-lg md:text-[16px] text-black/40 pb-10 font-medium">Add-ons help enhance your gaming experience.</p>

            <div className="flex flex-col gap-4">
              <label htmlFor="first" className={`flex justify-between items-center border  p-4 rounded-lg hover:border-purple-900 cursor-pointer transition duration-500 ease-in-out ${checked[0].status ? "border-purple-900 bg-blue-50/50" : "border-gray-300"}`}>
                  <div className="flex items-center gap-5">
                    <input type="checkbox" id="first" className="h-5 w-5 rounded-lg  accent-purple-800" checked={checked[0].status} onChange={() => handlecheck(0)}/>
                    <div>
                      <p className="text-blue-950 font-bold">Online services</p>
                      <p className="text-gray-500/50 text-[14px] font-medium">Access to multiplayer games</p>
                    </div>
                  </div>
                  <p className="text-purple-700/50 font-medium">{ monthly ? "+$1/mo" : "+$10/yr"}</p>
              </label>

              <label htmlFor="second" className={`flex justify-between items-center border  p-4 rounded-lg hover:border-purple-900 cursor-pointer transition duration-500 ease-in-out ${checked[1].status ? "border-purple-900 bg-blue-50/50" : "border-gray-300"}`}>
                  <div className="flex items-center gap-5">
                    <input type="checkbox" id="second" className="h-5 w-5 rounded-lg  accent-purple-800" checked={checked[1].status} onChange={() => handlecheck(1)}/>
                    <div>
                      <p className="text-blue-950 font-bold">Larger storage</p>
                      <p className="text-gray-500/50 text-[14px] font-medium">Extra 1tb of cloud save</p>
                    </div>
                  </div>
                  <p className="text-purple-700/50 font-medium">{ monthly ? "+$2/mo" : "+$20/yr"}</p>
              </label>

              <label htmlFor="third" className={`flex justify-between items-center border p-4 rounded-lg hover:border-purple-900 cursor-pointer transition duration-500 ease-in-out ${checked[2].status ? "border-purple-900 bg-blue-50/50" : "border-gray-300"}`}>
                  <div className="flex items-center gap-5">
                    <input type="checkbox" id="third" className="h-5 w-5 rounded-lg  accent-purple-800" checked={checked[2].status} onChange={() => handlecheck(2)}/>
                    <div>
                      <p className="text-blue-950 font-bold">Customizable profile</p>
                      <p className="text-gray-500/50 text-[14px] font-medium">Custom theme on your profile</p>
                    </div>
                  </div>
                  <p className="text-purple-700/50 font-medium">{ monthly ? "+$2/mo" : "+$20/yr"}</p>
              </label>
            </div>

            <div className="hidden md:flex justify-between items-center md:mt-16 lg:mt-24">
            <Link to="/plan" className="text-gray-500">Go back</Link>
            <Link to="/summary" className="bg-blue-950 rounded-md px-8 py-3 text-white hover:opacity-90">Next Step</Link>
          </div>

        </div>
      </div>
      <div className="bg-white py-4 px-6 flex justify-between items-center md:hidden">
            <Link to="/plan" className="text-gray-500">Go back</Link>
            <Link to="/summary" className="bg-blue-950 rounded-md px-8 py-3 text-white hover:opacity-90">Next Step</Link>

        </div>
    </div>
  )
}

export default AddOn
