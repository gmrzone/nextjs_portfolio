import { useState } from "react";

const useForm = (initialValue = {}) => {
    const [inputValues, setInputValues] = useState(initialValue);
    const resetForm = () => {
        setInputValues(initialValue);
    };
    const handleChange = (e) => {
        setInputValues((s) => {
            return { ...s, [e.target.name]: e.target.value };
        });
    };
    return { inputValues, handleChange, resetForm };
};

export default useForm;
