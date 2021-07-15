import ContactContext from "./ContactContext";
import ContactForm from "./ContactForm";
const ContactContainer = () => {
    return (
        <div className="flex flex-col w-full desktop-st:flex-row overflow-x-hidden md:overflow-x-auto">
            <ContactContext />
            <ContactForm />
        </div>
    );
};

export default ContactContainer;
