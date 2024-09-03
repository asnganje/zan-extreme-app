import { contact } from "@/utils/contacts"
import Logo from "../ui/Logo"
import { socialIcons } from "@/utils/socialIcons"
import { NavLink } from "react-router-dom"
import { service } from "@/utils/serviceList"

function Footer() {
  return (
    <div className="mt-auto bg-gray-200 rounded-md dark:bg-black shadow-lg pb-6">
      <div className="grid grid-cols-1 gap-y-10 w-[90vw] xl:w-[80vw] place-items-center md:grid-cols-[14%,33%,19%,34%] gap-x-4">
        <div className="hidden md:block w-[5vw] h-[10vh]">
          <Logo />
        </div>
        <div className="">
          <h3 className="text-center my-2">CONTACT US</h3>
          <div className="flex flex-col gap-4">
            {
              contact.map((el)=> {
                const IconComponent = el.icon
                return(
                  <div className="flex gap-x-2 items-center" key={el.id}>
                    <div className="w-[3vw] h-[3vh]">
                      <IconComponent className="w-full h-full object-cover text-blue-700"/>
                    </div>
                    <p className="text-sm tracking-tighter">{el.info}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="">
          <h3 className="text-center my-2">CONNECT WITH US</h3>
          <div className="flex gap-x-3">
            {
              socialIcons.map((sIcon)=> {
                const ComponentIcon = sIcon.icon
                return <NavLink to={sIcon.href} className="flex" key={sIcon.id}>
                        <ComponentIcon className={`${sIcon.color} w-5 h-5`} />
                      </NavLink> 
              })
            }
          </div>
        </div>
        <div className="">
          <h3 className="text-center my-2">OUR SERVICES</h3>
          <ul className="list-disc font-mono tracking-tighter">
            {
              service.map((item)=> {
                return <li key={item.id}>
                  {item.description}
                </li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Footer