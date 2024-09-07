import { links } from "@/utils"
import { NavLink } from "react-router-dom"

function Navlinks() {
  return (
    <div className="hidden lg:flex justify-center items-center gap-x-8">
      {
        links.map((link)=> {
          return <NavLink 
                  key={link.label}
                  to={link.href}
                  className={({isActive})=> {
                    return `capitalize text-white text-lg tracking-wide hover:font-semibold ${isActive? 'font-bold' : ''}`
                  }}
                >
                  {link.label}
            </NavLink>
        })
      }
    </div>
  )
}
export default Navlinks