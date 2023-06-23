import SideBar from "../components/SideBar"

const ThankYou = () => {
  return (
    <div className="bg-[#f0f6ff] flex flex-col justify-between md:bg-white h-screen md:justify-normal md:flex-row gap">
      <SideBar/>
      <div className="absolute top-28 mx-8  md:relative md:top-0 md:mx-0 md:flex md:justify-center md:items-center md:flex-col md:w-[75vw] shadow-md md:shadow-none">
        <div className="flex flex-col justify-center items-center gap-3 px-7 py-10 rounded-2xl md:px-0 md:py-0 md:rounded-none md:w-[40vw] bg-white lg:w-[30rem]">
        <img src="icon-thank-you.svg" alt="thank you"  className="mb-3"/>
        <p className="text-blue-950 text-2xl font-bold">Thank you!</p>
        <p className="text-center text-black/50">Thanks for confirming your subscription! we both hope you have fun using this plateform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
        </div> 
        </div>     
    </div>
  )
}

export default ThankYou
