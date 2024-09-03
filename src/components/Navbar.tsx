import LinksDropdown from "./LinksDropdown"
import Logo from "./Logo"
import ModeToggle from "./ModeToggle"
import Navlinks from "./Navlinks"

function Navbar() {
  return (
    <nav className="py-4 shadow-lg px-4">
      <div className="flex justify-between items-center">
        <Logo />
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