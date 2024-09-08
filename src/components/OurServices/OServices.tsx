import { servicesR } from "@/utils/servicesOg"

function OServices() {
  return (
    <div className="flex flex-col gap-[15vh]">
      {
        servicesR.map((service)=> {
          const {id, content, img, heading} = service
          return (
            <div className="grid gap-y-10 md:gap-y-0 md:grid-cols-[30%,1fr] shadow-2xl rounded p-4" key={id}>
              <div className="w-[80%] mx-auto md:mx-0 md:w-[20vw] md:h-[30vh]">
                <img src={img} alt={heading} className="w-full h-full rounded-md" />
              </div>
              <div className="">
                <h2 className="font-bold md:text-2xl text-center md:text-start leading-6 text-orange-400">{id}. {heading}</h2>
                <p className="text-lg">{content}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
export default OServices