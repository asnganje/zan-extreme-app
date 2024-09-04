import Logo from "../ui/Logo"

function LandingIntro() {
  return (
    <div>
      <div className=" shadow-lg py-2 mt-2">
        <p className="font-bodoni text-4xl text-blue-500 font-extrabold text-center">Zan Extreme Holidays and Wildlife Safaris!</p>
      </div>
      <div className="flex flex-col items-center md:grid md:grid-cols-[30%,1fr]">
        <div className="w-[90%] h-full md:w-[20vw] md:h-[30vh] lg:h-[35vh] md:mb-[5vh]">
          <Logo />
        </div>
        <div className="my-4">
            <p className="px-8 text-center md:py-8 shadow font-montserrat text-gray-500 tracking-wide">
              Welcome to the Enchanting Spice Island of Zanzibar and the Untamed Wilderness of Tanzania! 
              Immerse yourself in the exotic allure of Zanzibar, the fabled Spice Islands, and the breathtaking landscapes of Tanzania's wildlife havens. With over 15 years of expertise in Tourism and Hospitality, we are thrilled to introduce ZAN EXTREME HOLIDAYS AND WILDLIFE SAFARIS, your gateway to unparalleled adventures.
            </p>
        </div>
      </div>
    </div>
  )
}
export default LandingIntro