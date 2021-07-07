import style from '../../styles/input.module.scss'
const InputField = ({name, ...attrs}) => {
    return (
        <label className={style['custom-input']}>
            <input {...attrs} className={style['main-input']}/>
            <span className={style['custom-input__placeholder']}>{name}</span>
            <span className={style['custom-border']}></span>
        </label>
    )
}

export default InputField