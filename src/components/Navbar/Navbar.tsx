import LinksDropdown from "./LinksDropdown"
import Logo from "../ui/Logo"
import ModeToggle from "./ModeToggle"
import Navlinks from "./Navlinks"

function Navbar() {
  return (
    <nav className="sticky top-0 h-[15vh] md:h-[20vh] z-50 flex justify-between items-center bg-gray-200 dark:bg-black shadow-lg px-4">
        <div className="w-[6rem] h-[6rem] hidden lg:flex">
          <Logo />
        </div>
        <LinksDropdown />
        <Navlinks />
        <div className="flex justify-center items-center">
          <ModeToggle />
        </div>
    </nav>
  )
}
export default Navbar