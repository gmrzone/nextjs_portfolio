import { useState, ChangeEvent } from "react";

interface IinitialValues {
    name: string;
    email: string;
    message: string;

}

const useForm = (initialValue: IinitialValues) => {
    const [inputValues, setInputValues] = useState<IinitialValues>(initialValue);
    const resetForm = () => {
        setInputValues(initialValue);
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValues((s) => {
            return { ...s, [e.target.name]: e.target.value };
        });
    };
    return { inputValues, handleChange, resetForm };
};

export default useForm;
