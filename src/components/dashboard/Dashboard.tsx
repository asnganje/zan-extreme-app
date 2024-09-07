import { dashItems } from "@/utils/dashItems"
import { Separator } from "../ui/separator"
import { useState } from "react"

function Dashboard() {
  const [isVisible, setIsVisible] = useState<number[]>([])

  const toggleVisibility = (id: number) => {
    setIsVisible((prevIds)=> prevIds.includes(id)?
                  prevIds.filter((prevId)=>prevId !== id):
                  [...prevIds, id]
    )
  }

  const truncateText = (text:string, limit: number) => {
    if (text.length > 0) {
      return text.substring(0, limit)+'...'
    }
    return text
  }

  return (
    <div className="shadow-lg px-8 pb-8">
      <p className="text-center uppercase text-xl xs:text-3xl text-blue-400 px-1 py-6 shadow-2xl rounded mt-2 mb-10"><span className="hidden md:inline">"Discover Zanzibar: </span><span className="inline md:hidden">"THE </span>Wonders Tour Package<span className="inline md:hidden">"</span><span className="hidden md:inline">"</span></p>
      {
        dashItems.map((item, i)=> {
          const isFullTextVisible = isVisible.includes(item.id)
          const textLimit = 250;
          return (
            <div key={item.id} className={`flex flex-col md:grid md:grid-cols-2 md:gap-[5vw]`}>
              <div className={`flex flex-col ${i % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <p className="text-blue-300 text-center text-2xl cursor-pointer">{item.heading}</p>
                <Separator className="text-orange-400 mb-4"/>
                <p className="px-2 text-start pb-6 md:py-8 shadow font-montserrat text-gray-500 dark:text-white tracking-wide mb-6">
                  {isFullTextVisible ? item.text : truncateText(item.text, textLimit)}
                  <button 
                    className="inline text-xs xs:text-sm text-blue-400 underline cursor-pointer"
                    onClick={()=>toggleVisibility(item.id)}
                    >
                      {isFullTextVisible?'See less':'See more'}
                    </button>
                </p>
            </div>
            <div className={`relative group flex justify-center items-center ${i % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <img src={item.image} alt="" className="cursor-pointer"/>
              <div className="absolute inset-0 flex items-center justify-center bg-transparent bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <p className="text-white text-center text-3xl font-bold">{item.alt}</p>
              </div>
            </div>
            </div>
          )
        })
      }

    </div>
  )
}
export default Dashboard