import { dashItems } from "@/utils/dashItems"
import { Separator } from "../ui/separator"

function Dashboard() {
  return (
    <div className="shadow-2xl my-[12vh] p-8">
      {
        dashItems.map((item, i)=> {
          return (
            <div key={item.id} className={`flex flex-col md:grid md:grid-cols-2 md:gap-[5vw] mb-[15vh]`}>
              <div className={`flex flex-col ${i % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <p className="text-blue-300 text-2xl cursor-pointer">{item.heading}</p>
                <Separator className="text-orange-400"/>
                <p className="px-8 text-center md:text-start md:py-8 shadow font-montserrat text-gray-500 dark:text-white tracking-wide">{item.text}</p>
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