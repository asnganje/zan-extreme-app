import Footer from "@/components/Footer/Footer"
import Header from "@/components/Navbar/Header"
import Navbar from "@/components/Navbar/Navbar"
import { Outlet } from "react-router-dom"

function HomeLayout() {
  return (
    <div className="flex flex-col align-element pb-2 bg-white">
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
export default HomeLayout