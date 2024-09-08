import { FcCellPhone } from "react-icons/fc";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

function ContactHeader() {
  return (
    <div className="flex flex-col md:flex-row gap-y-8 justify-between items-center md:w-[90vw] lg:w-[70vw] mx-auto ">
      <div className="flex flex-col justify-center items-center gap-2 text-[15px">
        <FcCellPhone className="w-[10vw] h-[10vh]"/>
        <h3 className="font-bold font-serif leading-8 tracking-wider text-orange-400 text-lg">Telephone</h3>
        <p className="text-gray-600 dark:text-white -mb-2">+255 765 118 898</p>
        <p className="text-gray-600 dark:text-white">+255 762 213 399</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 text-[15px">
        <MdOutlineMarkEmailUnread className="w-[10vw] h-[10vh] text-blue-400"/>
        <h3 className="font-bold font-serif leading-8 tracking-wider text-orange-400 text-lg">Email</h3>
        <p className="text-gray-600 leading-6 dark:text-white">zanextremeholydays@gmail.com</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 text-[15px]">
        <CiLocationOn className="w-[10vw] h-[10vh] text-blue-700"/>
        <h3 className="font-bold font-serif leading-8 tracking-wider text-orange-400 text-lg">Address</h3>
        <p className="text-gray-600 leading-6 dark:text-white">Magomeni Wandaras, Zanzibar</p>
      </div>
    </div>
  )
}
export default ContactHeader