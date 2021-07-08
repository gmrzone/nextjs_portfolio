import InputField from '../../common/InputField';
import TextAreaField from '../../common/TextAreaField';
import CustomButton from '../../common/CustomButton';
import useForm from '../../../hooks/useForm'
const ContactForm = () => {
    const [inputValues, handleChange] = useForm({name:"", email: "", message:""})
    const handleSubmit = (e) => {
         e.preventDefault()
         console.log(inputValues)
    }
    return (
        <form className="space-y-6 w-full desktop-st:w-1/2" onSubmit={handleSubmit}>
            <div className="space-y-2">
                <InputField type="text" name="name" label="Name" value={inputValues.name} onChange={handleChange}/>
                <InputField type="email" name="email" label="Email" value={inputValues.email} onChange={handleChange}/>
                <TextAreaField name="message" label="Message" value={inputValues.message} onChange={handleChange}/>
            </div>
            <div className="text-right">
                <CustomButton type="submit" text="Contact me" action={true}/>
            </div>
        </form>
    )
}  

export default ContactForm