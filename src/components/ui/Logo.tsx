import { Link } from "react-router-dom"
import logo from "/logo.png"

function Logo() {
  return (
    <Link
      to="/"
      className="w-full h-full justify-center items-center p-2 rounded-lg text-white bg-transparent"
    >
      <img src={logo} alt="logo" className="w-full h-full object-cover rounded-2xl contrast-125 brightness-110" />
    </Link>
  )
}
export default Logo