import AboutContext from "@/components/About/AboutContext"
import { motion } from "framer-motion"
function About() {
  return (
    <div className="min-h-[70vh] p-5 bg-gray-400 dark:bg-black">
      <motion.h2 
        className="font-bold flex justify-start items-center font-serif leading-8 tracking-wider text-orange-300 text-2xl xxs:text-3xl md:text-4xl py-6 w-[70vw] mx-auto px-4"
        animate={{ x: ["100%", "-100%", "0%"] }}
        transition={{ duration: 30, ease: "linear" }}
      >
        Get to Know Us...
      </motion.h2>
      <AboutContext />
    </div>
  )
}
export default About