import { Button } from "../ui/button"

function ContactForm() {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <div className="md:w-[80vw] lg:w-[70vw] mx-auto flex-col">
      <form onSubmit={submitHandler} className="w-[100%] md:w-[70%] mx-auto flex flex-col gap-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="p-1 md:p-2 border text-sm md:text-base border-gray-500 rounded"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="name">Email</label>
            <input
              type="email"
              id="email"
              className="p-1 md:p-2 text-sm border border-gray-500 rounded"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="textarea">Message</label>
          <textarea 
            name="textarea" 
            id="textarea"
            placeholder="Message"
            className="pt-1 pl-4 h-[30vh] border text-gray-600 border-gray-500 rounded"
          />
        </div>
        <div className="">
          <label htmlFor="checkbox" className="hidden">checkbox</label>
          <input type="checkbox" name="checkbox" id="checkbox" className="w-5 h-5"/>
          <p className="font-montserrat">
          I agree to receive marketing emails from Zan Extreme Holidays and Wildlife Safaris. Please note that these email include but are not limited to newsletters, promotional offers and announcements.
          </p>
        </div>
        <Button type="submit" className="cursor bg-blue-500 hover:bg-blue-400 p-3 hover:p-2 md:w-[10vw] md:text-lg place-self-end">Submit</Button>
      </form>
    </div>
  )
}
export default ContactForm