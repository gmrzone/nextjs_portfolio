import InputField from '../../common/InputField';
import TextAreaField from '../../common/TextAreaField';
import CustomButton from '../../common/CustomButton'
const ContactForm = () => {
    return (
        <form className="space-y-6 w-full desktop-st:w-1/2 mt-6">
            <div className="space-y-2">
                <InputField type="text" name="name"/>
                <InputField type="email" name="Email"/>
                <TextAreaField name="message"/>
            </div>
            <div className="text-right">
                <CustomButton type="submit" text="Contact me" action={true}/>
            </div>
        </form>
    )
}  

export default ContactForm