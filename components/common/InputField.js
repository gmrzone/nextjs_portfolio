import style from "../../styles/customInput.module.scss";
import { useRef, useEffect } from "react";
const InputField = ({ label, value, ...attrs }) => {
    const inputRef = useRef();
    useEffect(() => {
        if (value) {
            inputRef.current.classList.add(style["not-empty"]);
        } else {
            inputRef.current.classList.remove(style["not-empty"]);
        }
    }, [value]);

    return (
        <div className={style["main-container"] + " " + style["input"]}>
            <label className={style["custom-input"]} ref={inputRef}>
                <input {...attrs} className={style["main-input"]} value={value} autoCorrect="off" spellCheck="false" autoComplete="off" />
                <span className={style["custom-input__placeholder"]}>{label}</span>
                <span className={style["custom-border"]}></span>
            </label>
        </div>
    );
};

export default InputField;

/*
 * Created on Tue Jul 13 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */
