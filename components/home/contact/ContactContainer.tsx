import ContactContext from "./ContactContext";
import ContactForm from "./ContactForm";
import { NextPage } from "next";
const ContactContainer: NextPage = () => {
    return (
        <div className="flex flex-col w-full desktop-st:flex-row">
            <ContactContext />
            <ContactForm />
        </div>
    );
};

export default ContactContainer;
