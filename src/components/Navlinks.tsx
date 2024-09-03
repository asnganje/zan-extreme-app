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
                    return `capitalize font-light tracking-wide hover:font-semibold ${isActive? 'text-primary' : ''}`
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