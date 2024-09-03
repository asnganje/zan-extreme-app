import LinksDropdown from "./LinksDropdown"
import Logo from "../ui/Logo"
import ModeToggle from "./ModeToggle"
import Navlinks from "./Navlinks"

function Navbar() {
  return (
    <nav className="py-4 bg-gray-200 rounded-md dark:bg-black shadow-lg px-4">
      <div className="flex justify-between items-center">
        <div className="w-[60px] h-[60px] hidden lg:flex">
          <Logo />
        </div>
        <LinksDropdown />
        <Navlinks />
        <div className="flex justify-center items-center">
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}
export default Navbar