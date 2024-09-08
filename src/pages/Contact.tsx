import ContactForm from "@/components/Contact/ContactForm";
import ContactHeader from "@/components/Contact/ContactHeader";

function Contact() {
  return (
    <div className="min-h-[70vh] p-10 flex flex-col gap-10">
      <ContactHeader />
      <ContactForm />
    </div>
  )
}
export default Contact;