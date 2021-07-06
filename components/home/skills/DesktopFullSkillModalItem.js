import BlurBackDrop from "../../shared/header/BlurBackDrop";
import { useRef, useEffect } from 'react'
const DesktopFullSkillModalItem = ({ active, close }) => {
    const backdrop = useRef()

    const transitionIn = () => {
        backdrop.current.classList.add("bg-opacity-30");
        backdrop.current.classList.add("backdrop-opacity-100");
    }
    const transitionOut  = () => {
        backdrop.current.classList.add('desktop-st:hidden')
    }
    useEffect(() => {
        if (active){
            backdrop.current.classList.remove('desktop-st:hidden')
            backdrop.current.classList.add('desktop-st:block')
            setTimeout(transitionIn, 25)
        }
        else{
            backdrop.current.classList.remove("bg-opacity-30");
            backdrop.current.classList.remove("backdrop-opacity-100");
            setTimeout(transitionOut, 500)

        }
    }, [active])

    return (
        <div className="hidden desktop-st:block">
            <BlurBackDrop backdrop={backdrop} close={close}/>
        </div>
    )
}

export default DesktopFullSkillModalItem