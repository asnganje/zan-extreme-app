import LinksDropdown from "./LinksDropdown"
import Logo from "../ui/Logo"
import ModeToggle from "./ModeToggle"
import Navlinks from "./Navlinks"
import { Button } from "../ui/button"

function Navbar() {
  return (
    <nav className="sticky top-0 h-[13vh] md:h-[20vh] z-50 flex justify-between items-center bg-blue-400 dark:bg-black shadow-lg px-4">
        <div className="w-[6rem] h-[6rem] hidden lg:flex">
          <Logo />
        </div>
        <LinksDropdown />
        <Navlinks />
        <div className="flex justify-center items-center gap-10">
          <Button className="bg-orange-400 xxs:mr-[20vw] md:mr-0 text-lg hover:bg-orange-300">Book now</Button>
          <ModeToggle />
        </div>
    </nav>
  )
}
export default Navbar