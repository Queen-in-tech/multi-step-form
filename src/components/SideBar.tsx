import {useLocation} from "react-router-dom"

const SideBar = () => {
    const location = useLocation()
   

  return (
    <div className="bg-mobileBg w-screen h-[23vh] justify-center items-start md:bg-desktopBg bg-cover bg-center bg-no-repeat md:h-[95vh] md:w-[23vw] py-10 px-8 md:my-4 md:ml-4 md:rounded-xl flex md:flex-col gap-5 md:gap-7 md:justify-normal">
      <div className="flex gap-4 justify-start items-center">
      <p className={`font-bold h-10 w-10 text-center rounded-full ${location.pathname === "/" ? "text-black py-2 bg-blue-200" : "text-white border-2 py-1 border-blue-200"}`}>1</p>
        <div className="hidden md:block">
            <p className="uppercase text-white/60 text-sm">step 1</p>
            <p className="uppercase text-white font-medium">your info</p>
        </div>
      </div>

      <div className="flex gap-4 justify-start items-center">
        <p className={`font-bold h-10 w-10 text-center rounded-full ${location.pathname === "/plan" ? "text-black py-2 bg-blue-200" : "text-white py-1 border-2 border-blue-200"}`}>2</p>
        <div className="hidden md:block">
            <p className="uppercase text-white/60 text-sm">step 2</p>
            <p className="uppercase text-white font-medium">select plan</p>
        </div>
      </div>

      <div className="flex gap-4 justify-start items-center">
        <p className={`font-bold h-10 w-10 text-center rounded-full ${location.pathname === "/add-on" ? "text-black py-2 bg-blue-200" : "text-white py-1 border-2 border-blue-200"}`}>3</p>
        <div className="hidden md:block">
            <p className="uppercase text-white/60 text-sm">step 3</p>
            <p className="uppercase text-white font-medium">add-ons</p>
        </div>
      </div>

      <div className="flex gap-4 justify-start items-center">
        <p className={`font-bold h-10 w-10 text-center rounded-full ${location.pathname === "/summary" ? "text-black py-2 bg-blue-200" : "text-white py-1 border-2 border-blue-200"}`}>4</p>
        <div className="hidden md:block">
            <p className="uppercase text-white/60 text-sm">step 4</p>
            <p className="uppercase text-white font-medium">summary</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar
