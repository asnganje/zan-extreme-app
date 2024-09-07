import AboutContext from "@/components/About/AboutContext"

function About() {
  return (
    <div className="min-h-[70vh] p-5 bg-gray-200 dark:bg-black">
      <h2 className="font-bold font-robotoSlab text-2xl xxs:text-3xl md:text-4xl py-6 w-[70vw] mx-auto px-4">Get to Know Us...</h2>
      <AboutContext />
    </div>
  )
}
export default About