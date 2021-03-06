import InputField from "../../common/InputField";
import TextAreaField from "../../common/TextAreaField";
import CustomButton from "../../common/CustomButton";
import useForm from "../../../hooks/useForm";
import { useState, useEffect, useRef, FormEvent } from "react";

interface IFormStatus {
    status: string | null;
    message: string | null;
}

interface IResponse {
    status: string;
    message: string;
}

interface IFetchOpt {
    method: string;
    headers: {
        Accept: string;
        "Content-Type": string;
    };
    body: string;
}
const ContactForm = () => {
    const animationObj = useRef<HTMLFormElement | null>(null);
    const { inputValues, handleChange, resetForm } = useForm({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState<boolean>(false);
    const [formStats, setFormStats] = useState<IFormStatus>({ status: null, message: null });

    function postContactData<T>(url: string, options: IFetchOpt): Promise<T> {
        return fetch(url, options)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json() as Promise<{ data: T }>;
            })
            .then((data) => {
                return data;
            })
            .catch((error) => error);
    }

    const handleSubmit: (event: FormEvent<HTMLFormElement>) => void = (e) => {
        e.preventDefault();
        setLoading(true);

        const fetchOptions = {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inputValues),
        };

        postContactData<IResponse>("/api/contact/", fetchOptions)
            .then((data) => {
                console.log(data);
                setFormStats({ status: "ok", message: data.message });
                resetForm();
                setLoading(false);
            })
            .catch((e) => {
                console.log(e);
                setLoading(false);
                setFormStats({ status: "error", message: "error" });
            });
    };

    useEffect(() => {
        const options = {
            rootMargin: "0px 0px -70px 0px",
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((x) => {
                if (x.isIntersecting) {
                    x.target.classList.remove("translate-x-full");
                    x.target.classList.remove("opacity-0");
                    x.target.classList.add("translate-x-0");
                    x.target.classList.add("opacity-100");
                    observer.unobserve(x.target);
                }
            });
        }, options);

        if (animationObj.current) {
            observer.observe(animationObj.current);
        }
    }, []);
    return (
        <form
            className="space-y-6 w-full opacity-0 transform-gpu translate-x-full transition-all duration-500 desktop-st:w-1/2 main-container"
            onSubmit={handleSubmit}
            ref={animationObj}>
            <div className="space-y-2">
                <InputField type="text" name="name" label="Name" value={inputValues.name} onChange={handleChange} required />
                <InputField type="email" name="email" label="Email" value={inputValues.email} onChange={handleChange} required />
                <TextAreaField name="message" label="Message" value={inputValues.message} onChange={handleChange} required />
            </div>
            {formStats.status && (
                <div
                    className={`${
                        formStats.status === "ok" ? "bg-sec bg-opacity-90" : "bg-action bg-opacity-85"
                    } p-4 rounded-md font-semibold text-white`}>
                    {formStats.message}
                </div>
            )}
            <div className="text-right">
                <CustomButton
                    type="submit"
                    text="Send"
                    icon="far fa-address-book text-md desktop-st:text-xl"
                    action={true}
                    loading={loading}
                />
            </div>
            <style jsx>{`
                .main-container {
                    backface-visibility: hidden;
                    perspective: 1000;
                    will-change: transform;
                }
            `}</style>
        </form>
    );
};

export default ContactForm;
