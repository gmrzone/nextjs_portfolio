import ContactContainer from "./ContactContainer";
import SectionHeader from "../../common/SectionHeader";
import { NextPage } from "next";
const ContactMain: NextPage = () => {
    return (
        <div className="mt-10 mb-10 desktop-st:mt-16 overflow-x-hidden" id="contact">
            <div className="container">
                <SectionHeader title="Contact Me" meta="Get in Touch" inverted={false} />
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
