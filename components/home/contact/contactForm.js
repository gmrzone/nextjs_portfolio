import InputField from '../../common/InputField';
import TextAreaField from '../../common/TextAreaField';
const ContactForm = () => {
    return (
        <form className="space-y-2">
            <InputField type="text" name="name"/>
            <InputField type="email" name="Email"/>
            <TextAreaField name="message"/>
        </form>
    )
}  

export default ContactForm