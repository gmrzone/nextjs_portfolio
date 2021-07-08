import style from '../../styles/customInput.module.scss';
import {useRef} from  "react";
const TextAreaField = ({label, ...attrs}) => {
    const inputRef = useRef()
    const handleBlur = (e) => {
        if (e.target.value){
            inputRef.current.classList.add(style['not-empty'])
        }
        else{
            inputRef.current.classList.remove(style['not-empty'])
        }
    }
    return (
        <div className={style['main-container'] + " " + style['textarea']}>
            <label className={style['custom-input']} ref={inputRef}>
                <textArea {...attrs} className={style['main-input']} onBlur={handleBlur}/>
                <span className={style['custom-input__placeholder']}>{label}</span>
                <span className={style['custom-border']}></span>
            </label>
    </div>
    )
}

export default TextAreaField