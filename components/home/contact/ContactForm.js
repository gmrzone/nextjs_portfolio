import InputField from '../../common/InputField';
import TextAreaField from '../../common/TextAreaField';
import CustomButton from '../../common/CustomButton';
import useForm from '../../../hooks/useForm'
import {useState} from 'react'
const ContactForm = () => {
    const {inputValues, handleChange, resetForm} = useForm({name:"", email: "", message:""})
    const [loading, setLoading] = useState(false)
    const handleSubmit = (e) => {
         e.preventDefault()
         setLoading(true)
         fetch('/api/contact/', {
             method: "POST",
             headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json' 
             },
             body: JSON.stringify(inputValues)
         })
         .then(response => {
             if (response.status === 200){

                 console.log("Status 200")
             }
             else{
                 console.log("Something is wrong with the Server")
             }
             return response.json()
             
         })
         .then(data => {
             console.log(data)
             resetForm()
             setLoading(false)
         })
         .catch(e => {
            console.log(e)
            setLoading(false)
         })
    }
    return (
        <form className="space-y-6 w-full desktop-st:w-1/2" onSubmit={handleSubmit}>
            <div className="space-y-2">
                <InputField type="text" name="name" label="Name" value={inputValues.name} onChange={handleChange}/>
                <InputField type="email" name="email" label="Email" value={inputValues.email} onChange={handleChange}/>
                <TextAreaField name="message" label="Message" value={inputValues.message} onChange={handleChange}/>
            </div>
            <div className="text-right">
                <CustomButton type="submit" text="Contact me" action={true} loading={loading}/>
            </div>
        </form>
    )
}  

export default ContactForm