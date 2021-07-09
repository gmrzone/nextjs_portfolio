import ContactContext from "./ContactContext";
import ContactForm from "./ContactForm";
const ContactContainer = () => {
    return (
        <div className="flex flex-col w-full desktop-st:flex-row">
            <ContactContext />
            <ContactForm />
        </div>
    );
};

export default ContactContainer;
