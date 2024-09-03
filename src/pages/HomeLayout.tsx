import { Header } from "@/components"
import { Outlet } from "react-router-dom"

function HomeLayout() {
  return (
    <div className="align-element py-20">
      <Header />
      <nav>Navbar</nav>
      <Outlet />
    </div>
  )
}
export default HomeLayout