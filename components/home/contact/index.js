import ContactContainer from "./ContactContainer";
import SectionHeader from "../../common/SectionHeader";
const ContactMain = () => {
    return (
        <div className="mt-10 mb-10 desktop-st:mt-16">
            <div className="container">
                <SectionHeader title="Contact Me" meta="Get in Touch" />
                <div>
                    <ContactContainer />
                </div>
            </div>
        </div>
    );
};
export default ContactMain;

/*
 * Created on Thu Jul 08 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */
