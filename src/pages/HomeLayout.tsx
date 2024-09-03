import { Outlet } from "react-router-dom"

function HomeLayout() {
  return (
    <div>
      <header>Header</header>
      <nav>Navbar</nav>
      <Outlet />
    </div>
  )
}
export default HomeLayout