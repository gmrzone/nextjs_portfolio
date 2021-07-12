import BlurBackDrop from "../../shared/header/BlurBackDrop";
import {useRef, useEffect} from 'react'
import reactDom from 'react-dom'
const ProjectDetailModal = ({active, closeModal}) => {
    const backdrop = useRef()
    const container = useRef()
    const transitionOutModal = () => {
        backdrop.current.classList.remove('block')
        backdrop.current.classList.remove('desktop-st:block')
        backdrop.current.classList.add('hidden')
        backdrop.current.classList.add('desktop-st:hidden')

        container.current.classList.remove('block')
        container.current.classList.add('hidden')


    }
    const transitionInModal = () => {
        backdrop.current.classList.remove('bg-opacity-0')
        backdrop.current.classList.remove('backdrop-opacity-0')
        backdrop.current.classList.add('bg-opacity-60')
        backdrop.current.classList.add('backdrop-opacity-100')
    }
    useEffect(() => {
        if (active){
            backdrop.current.classList.remove('hidden')
            backdrop.current.classList.remove('desktop-st:hidden')
            backdrop.current.classList.add('block')
            backdrop.current.classList.add('desktop-st:block')
            
            container.current.classList.remove('hidden')
            container.current.classList.add('block')
            setTimeout(transitionInModal, 50)
        }
        else{
            backdrop.current.classList.remove('bg-opacity-60')
            backdrop.current.classList.remove('backdrop-opacity-100')
            backdrop.current.classList.add('bg-opacity-0')
            backdrop.current.classList.add('backdrop-opacity-0')

            setTimeout(transitionOutModal, 500)
        }
    }, [active])

    return reactDom.createPortal(
        <div className="fixed w-screen h-screen z-40" ref={container}>
            <BlurBackDrop backdrop={backdrop} zIndex="40" close={closeModal}/>
            <div>
                <div>
                    <i className="far fa-times text-2xl cursor-pointer text-white transition-colors duration-300 px-6 py-3" />
                </div>
                <div>

                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default ProjectDetailModal