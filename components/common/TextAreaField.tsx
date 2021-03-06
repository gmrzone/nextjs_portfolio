import style from "../../styles/customInput.module.scss";
import { useRef, useEffect, ChangeEvent } from "react";
import { NextPage } from "next";

interface TextAreaProps {
    label: string;
    value: string;
    name: string;
    required: boolean;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
const TextAreaField: NextPage<TextAreaProps> = ({ label, value, ...attrs }) => {
    const inputRef = useRef<HTMLLabelElement | null>(null);
    useEffect(() => {
        if (value) {
            if (inputRef.current) {
                inputRef.current.classList.add(style["not-empty"]);
            }
        } else {
            if (inputRef.current) {
                inputRef.current.classList.remove(style["not-empty"]);
            }
        }
    }, [value]);

    return (
        <div className={style["main-container"] + " " + style["textarea"]}>
            <label className={style["custom-input"]} ref={inputRef}>
                <textarea {...attrs} className={style["main-input"]} value={value} />
                <span className={style["custom-input__placeholder"]}>{label}</span>
                <span className={style["custom-border"]}></span>
            </label>
        </div>
    );
};

export default TextAreaField;

/*
 * Created on Tue Jul 13 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */
