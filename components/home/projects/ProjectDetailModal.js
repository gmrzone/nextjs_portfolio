import BlurBackDrop from "../../shared/header/BlurBackDrop";
import {useRef, useEffect} from 'react';
import reactDom from 'react-dom';
import ButtonLink from '../../common/ButtonLink'
const ProjectDetailModal = ({active, closeModal, activeItem}) => {
    const backdrop = useRef()
    const container = useRef()
    const transitionOutModal = () => {
        backdrop.current.classList.remove('block')
        backdrop.current.classList.remove('desktop-st:block')
        backdrop.current.classList.add('hidden')
        backdrop.current.classList.add('desktop-st:hidden')

        container.current.classList.remove('flex')
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
            container.current.classList.add('flex')
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

    const renderPoints = activeItem?.points.map((x, i) => {
        return (
            <li key={i}>
                {x}
            </li>
        )
    })

    return reactDom.createPortal(
        <div className="fixed w-screen h-screen z-40 justify-center items-center hidden" ref={container}>
            <BlurBackDrop backdrop={backdrop} zIndex="40" close={closeModal}/>
            <div className="absolute z-50 w-full max-w-6xl h-auto grid grid-cols-2" style={{maxHeight: "95%"}}>
                <div className="bg-main">
                    <i className="far fa-times text-2xl cursor-pointer text-main transition-colors duration-300 px-6 py-3" />
                    <div>

                    </div>
                </div>
                <div className="bg-bg-sec">
                     <div>
                         <h3>{activeItem?.name}</h3>
                         <p>{activeItem?.about}</p>
                     </div>
                     <ul className="list-disc pl-6">
                         {renderPoints}
                     </ul>
                     <div>
                         <ButtonLink text="Live Link" action={true}/>
                         <ButtonLink text="Github" icon="fab fa-github text-xl" cssClasses="bg-gray-900 hover:bg-gray-700"/>
                     </div>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default ProjectDetailModal