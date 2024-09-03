import Footer from "@/components/Footer/Footer"
import Header from "@/components/Navbar/Header"
import Navbar from "@/components/Navbar/Navbar"
import { Outlet } from "react-router-dom"

function HomeLayout() {
  return (
    <div className="flex flex-col align-element pt-10 pb-5 h-screen">
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
export default HomeLayout