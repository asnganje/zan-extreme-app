import { dashItems } from "@/utils/dashItems"
import { Separator } from "../ui/separator"
// import { useState } from "react"

function Dashboard() {
  // const [isVisible, setIsVisible] = useState<number[]>([])

  // const toggleVisibility = (id: number) => {
  //   setIsVisible((prevIds)=> prevIds.includes(id)?
  //                 prevIds.filter((prevId)=>prevId !== id):
  //                 [...prevIds, id]
  // )

  // }
  return (
    <div className="shadow-2xl my-[12vh] p-8">
      <p className="text-center uppercase text-xl xs:text-3xl text-blue-400 px-1 py-6 shadow-2xl rounded mt-2 mb-10"><span className="hidden md:inline">"Discover Zanzibar: </span><span className="inline md:hidden">"THE </span>Wonders Tour Package<span className="inline md:hidden">"</span><span className="hidden md:inline">"</span></p>
      {
        dashItems.map((item, i)=> {
          return (
            <div key={item.id} className={`flex flex-col md:grid md:grid-cols-2 md:gap-[5vw] mb-[15vh]`}>
              <div className={`flex flex-col ${i % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <p className="text-blue-300 text-center text-2xl cursor-pointer">{item.heading}</p>
                <Separator className="text-orange-400 mb-4"/>
                <p className="px-2 text-start md:py-8 shadow font-montserrat text-gray-500 dark:text-white tracking-wide mb-6">
                  {item.text}
                </p>
            </div>
            <div className={`flex justify-center items-center ${i % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <img src={item.image} alt="" className="cursor-pointer"/>
            </div>
            </div>
          )
        })
      }

    </div>
  )
}
export default Dashboard