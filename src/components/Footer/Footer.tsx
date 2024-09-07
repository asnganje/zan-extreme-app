import { contact } from "@/utils/contacts"
import Logo from "../ui/Logo"
import { socialIcons } from "@/utils/socialIcons"
import { NavLink } from "react-router-dom"
// import { service } from "@/utils/serviceList"

function Footer() {
  return (
    <div className="bg-blue-400 mb-2 dark:bg-black shadow-lg pb-6">
      <div className="grid grid-cols-1 gap-y-10 w-full place-items-center md:flex justify-between px-4">
        <div className="hidden md:block w-[8rem] h-[8rem] md:mb-14">
          <Logo />
        </div>
        <div className="">
          <h3 className="text-center my-2 font-bold">CONTACT US</h3>
          <div className="flex flex-col gap-4">
            {
              contact.map((el)=> {
                const IconComponent = el.icon
                return(
                  <div className="flex gap-x-2 items-center" key={el.id}>
                    <div className="w-[5vw] h-[5vh] md:w-[4vw] md:h-[4vh]">
                      <IconComponent className="w-full h-full object-cover text-white"/>
                    </div>
                    <p className="text-sm xs:text-base lg:text-lg tracking-tighter">{el.info}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="">
          <h3 className="text-center my-2 font-bold">CONNECT WITH US</h3>
          <div className="flex gap-x-5 ml-4">
            {
              socialIcons.map((sIcon)=> {
                const ComponentIcon = sIcon.icon
                return <NavLink to={sIcon.href} className="flex justify-center items-center" key={sIcon.id}>
                        <ComponentIcon className={`${sIcon.color} w-5 h-5 lg:w-7 lg:h-7`} />
                      </NavLink> 
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer