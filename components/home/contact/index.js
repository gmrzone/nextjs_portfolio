import ContactContainer from './ContactContainer'
const ContactMain = () => {
    return (
        <div className="mt-6 desktop-st:mt-12">
            <div className="container">
                <h2 className="text-main text-center">Contact</h2>
                <span className="text-center block text-gray-500 font-semibold">Get in Touch</span>
                <div>
                    <ContactContainer />
                </div>
            </div>
        </div>
    )
}
export default ContactMain