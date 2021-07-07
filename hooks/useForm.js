import { useState } from 'react';

const useForm = ({initialValue}) => {
    const [inputValue, setInputValue] = useState(initialValue)
    const handleChange = (e) => {
        setInputValue(s => {
            return {...s, [e.target.name]: e.target.value}
        })
    }
    return [inputValue, handleChange]       
}

export default useForm