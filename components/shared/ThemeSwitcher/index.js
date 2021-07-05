import style from '../../../styles/themeSwitcher.module.scss'
import {useState, useEffect, useRef} from 'react'
const ThemeSwitcher = () => {
    const [darkThemeActive, setDarkThemeActive] = useState(false)
    const toggleTheme = () => {
        setDarkThemeActive(s => !s)
    }
    const dartIcon = useRef()
    const LightIcon = useRef()
    const firstRender = useRef(true)
    const fr = firstRender.current

    const displayDarkIcon = () => {
        dartIcon.current.classList.remove('opacity-0')
        dartIcon.current.classList.remove('opacity-100')
    }
    const hideDarkIcon = () => {
        dartIcon.current.classList.add('hidden')
    }
    const displayLightIcon = () => {
        LightIcon.current.classList.remove('opacity-0')
        LightIcon.current.classList.remove('opacity-100')
    }
    const hideLightIcon = () => {
        LightIcon.current.classList.add('hidden')
    }

    useEffect(() => {
        if (darkThemeActive){
            if (fr){
                // If First Render then without animating show approprite icon
                LightIcon.current.classList.remove('hidden')
                LightIcon.current.classList.add('opacity-100')

                dartIcon.current.classList.add('hidden')
                dartIcon.current.classList.remove('opacity-100')
            }   
            else{
                // if not first render show approprite icon by animating
                LightIcon.current.classList.remove('hidden')
                setTimeout(displayLightIcon, 100)

                dartIcon.current.classList.remove('opacity-100')
                dartIcon.current.classList.add('opacity-0')
                setTimeout(hideDarkIcon, 100)

            }

        }
        else{
            if (fr){
                // If First Render then without animating show approprite icon
                dartIcon.current.classList.remove('hidden')
                dartIcon.current.classList.add('opacity-100')

                LightIcon.current.classList.add('hidden')
                LightIcon.current.classList.remove('opacity-100')
            }   
            else{
                // if not first render show approprite icon by animating
                dartIcon.current.classList.remove('hidden')
                setTimeout(displayDarkIcon, 100)
                
                LightIcon.current.classList.remove('opacity-100')
                LightIcon.current.classList.add('opacity-0')
                setTimeout(hideLightIcon, 100)

            }

        }

    },[darkThemeActive, fr])
    firstRender.current = false;
    return (
        <div className={`relative border border-solid bg-white rounded-full ${style['theme-switcher__container']}`}>
            <div className={`absolute left-0 rounded-full transition-all duration-300 w-8 h-8 ${darkThemeActive ? "translate-x-full bg-sec" : "translate-x-0 bg-black"} ${style['main-switch']}`} onClick={toggleTheme}>
                <i className={`fas fa-moon w-3 text-white text-xl mr-1 transition-opacity`} ref={dartIcon}/>
                <i className={`fas fa-sun w-3 text-white text-xl mr-2 transition-opacity`} ref={LightIcon}/>
            </div>
        </div>
    )
}
export default ThemeSwitcher