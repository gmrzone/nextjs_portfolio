import ContactForm from './contactForm'
const ContactMain = () => {
    return (
        <div className="mt-6 desktop-st:mt-12">
            <div className="container">
                <h2 className="text-main text-center">Contact</h2>
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
export default ContactMain