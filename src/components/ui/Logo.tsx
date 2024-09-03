import { Link } from "react-router-dom"
import logo from "/zan1.png"

function Logo() {
  return (
    <Link
      to="/"
      className="w-full h-full justify-center items-center p-2 rounded-lg text-white bg-transparent"
    >
      <img src={logo} alt="logo" className="w-full h-full object-cover rounded-2xl" />
    </Link>
  )
}
export default Logo