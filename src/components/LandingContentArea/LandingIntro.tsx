import Logo from "../ui/Logo"

function LandingIntro() {
  return (
    <div>
      <div className=" shadow-lg py-2 mt-2">
        <p className="font-bodoni text-2xl md:text-4xl text-blue-400 font-extrabold text-center">Zan Extreme Holidays and Wildlife Safaris!</p>
      </div>
      <div className="flex flex-col items-center md:grid md:grid-cols-[1fr] md:place-items-center">
        <div className="block w-[10rem] h-[9rem] mb-14 md:hidden">
          <Logo />
        </div>
        <div className="my-4 text-center">
            <p className="px-8 text-center md:text-start pb-6 md:py-8 shadow font-montserrat text-gray-500 dark:text-white tracking-wide">
              Welcome to the Enchanting Spice Island of Zanzibar and the Untamed Wilderness of Tanzania! 
              Immerse yourself in the exotic allure of Zanzibar, the fabled Spice Islands, and the breathtaking landscapes of Tanzania's wildlife havens. With over 15 years of expertise in Tourism and Hospitality, we are thrilled to introduce ZAN EXTREME HOLIDAYS AND WILDLIFE SAFARIS, your gateway to unparalleled adventures.
            </p>
        </div>
      </div>
    </div>
  )
}
export default LandingIntro