import InputField from '../../common/InputField';
import TextAreaField from '../../common/TextAreaField';
import CustomButton from '../../common/CustomButton';
import useForm from '../../../hooks/useForm'
import {useState} from 'react'
const ContactForm = () => {
    const {inputValues, handleChange, resetForm} = useForm({name:"", email: "", message:""})
    const [loading, setLoading] = useState(false)
    const [formStats, setFormStats] = useState({status: null, message: null})
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

                return response.json()
             }
             else{
                 setFormStats({status: "error", message: "Something is wrong with the Server. Please try again later."})
             }
             
             
         })
         .then(data => {
             console.log(data)
             setFormStats({status: "ok", message: data.message})
             resetForm()
             setLoading(false)
         })
         .catch(e => {
            console.log(e)
            setLoading(false)
            setFormStats({status: "error", message: data.message})
         })
    }
    return (
        <form className="space-y-6 w-full desktop-st:w-1/2" onSubmit={handleSubmit}>
            <div className="space-y-2">
                <InputField type="text" name="name" label="Name" value={inputValues.name} onChange={handleChange} required/>
                <InputField type="email" name="email" label="Email" value={inputValues.email} onChange={handleChange} required/>
                <TextAreaField name="message" label="Message" value={inputValues.message} onChange={handleChange} required/>
            </div>
            {formStats.status && <div className={`${formStats.status === "ok" ? "bg-sec bg-opacity-90" : "bg-action bg-opacity-85"} p-4 rounded-md font-semibold text-white`}>{formStats.message}</div>}
            <div className="text-right">
                <CustomButton type="submit" text="Contact me" action={true} loading={loading}/>
            </div>
        </form>
    )
}  

export default ContactForm