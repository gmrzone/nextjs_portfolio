import style from '../../styles/input.module.scss';
import {useRef} from  "react";
const InputField = ({name, ...attrs}) => {
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
        <div className={style['main-container']}>
            <label className={style['custom-input']} ref={inputRef}>
                <input {...attrs} className={style['main-input']} onBlur={handleBlur}/>
                <span className={style['custom-input__placeholder']}>{name}</span>
                <span className={style['custom-border']}></span>
            </label>
        </div>
    )
}

export default InputField