import { reviewData } from '../data';
import SliderItems from './SliderItem';
import style from '../../../styles/reviewSlider.module.scss';
import { useRef, useState, useEffect } from 'react'

const TestimonialSlider = () => {
    const mainContainer = useRef()
    const [currentTrans, setCurrentTrans] = useState(0)
    const renderReviewData = reviewData.map(x => {
        return (
            <SliderItems item={x} key={x.id}/>
        )
    })
    const currentTransPosition = useRef(0);
    const currentTransPosition1 = useRef(0);
    const maxRightTransition = useRef(0)
    let startTouchPosition = null;
    let currentTouchPosition = null;
    useEffect(() => {
        const resetSlider = () => {
            mainContainer.current.style.transform = "translate3d(0px, 0px, 0px)"
            currentTransPosition1.current = 0
            currentTransPosition.current = 0
        }
        window.addEventListener('resize', resetSlider)
    }, [])
    const handleTouchStart = (e) => {
        startTouchPosition = e.touches[0].clientX;                                      
        
    }
    const handleTouchEnd = (e) => {
        maxRightTransition.current = -(((mainContainer.current.firstChild.clientWidth + 20) * reviewData.length) - 20 - mainContainer.current.parentNode.clientWidth)
        currentTransPosition1.current = currentTransPosition.current
        
        if (currentTransPosition1.current > 0){
            console.log('Stop Left')
            mainContainer.current.style.transitionDuration = "0.3s"
            mainContainer.current.style.transform = "translate3d(0px, 0px, 0px)"
            currentTransPosition1.current = 0
            currentTransPosition.current = 0
        }
        else if (currentTransPosition1.current < maxRightTransition.current){
            console.log("Stop Right")
            mainContainer.current.style.transitionDuration = "0.3s"
            mainContainer.current.style.transform = `translate3d(${maxRightTransition.current}px, 0px, 0px)`
            currentTransPosition1.current = maxRightTransition.current
            currentTransPosition.current = maxRightTransition.current
        }
        
        if (currentTouchPosition){
            let sliderItemWidth = mainContainer.current.firstChild.clientWidth
            
            if (currentTouchPosition > startTouchPosition){
                if (currentTransPosition1.current < 0){
                    const ratio = Math.ceil(currentTransPosition.current / (sliderItemWidth + 20))
                    const transitionTo = ((sliderItemWidth * ratio) + ratio * 20)
                    console.log(transitionTo)
                    mainContainer.current.style.transitionDuration = "0.3s";
                    mainContainer.current.style.transform = `translate3d(${transitionTo}px, 0px, 0px)`
                    currentTransPosition1.current = transitionTo
                }
            }
            else{
                    if (currentTransPosition1.current > maxRightTransition.current){
                        const ratio = Math.floor(currentTransPosition.current / (sliderItemWidth + 20))
                        const transitionTo = ((sliderItemWidth * ratio) + ratio * 20)
                        console.log(transitionTo)
                        mainContainer.current.style.transitionDuration = "0.3s";
                        mainContainer.current.style.transform = `translate3d(${transitionTo}px, 0px, 0px)`
                        currentTransPosition1.current = transitionTo

                    }
            }
        }
    }
    // Touch Move Event
    const handleTouchMove = (e) => {
        

        if (!maxRightTransition.current){
            maxRightTransition.current = -(((mainContainer.current.firstChild.clientWidth + 20) * reviewData.length) - 20 - mainContainer.current.parentNode.clientWidth)
        }
        // Get Touches object
        const touches = e.touches ;
        // get current Page Position same as clientX
        currentTouchPosition = touches[0].clientX
        let tr = currentTransPosition1.current + (startTouchPosition > currentTouchPosition ? -(startTouchPosition - currentTouchPosition) : (currentTouchPosition - startTouchPosition))
        if (tr > 0){
            tr /= 6    
        }
        else if (maxRightTransition.current && tr < maxRightTransition.current){
            let extra_trans = maxRightTransition.current - tr
            extra_trans /= 6
            tr = maxRightTransition.current - extra_trans
            
        }
        mainContainer.current.style.transitionDuration = '0s'
        mainContainer.current.style.transform = `translate3d(${tr}px, 0px, 0px)`
        console.log(tr)
        currentTransPosition.current = tr


    }
    console.log(currentTrans)
    return (
        <div className={style['outer-container']}>
            <div className={style['inner-container'] + " inner-container"} onTouchMove={handleTouchMove} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} ref={mainContainer}>
                {renderReviewData}
            </div>
            <style jsx>{`
                .inner-container {
                    width: 100%;

                }
                @media (min-width: 767px){
                    .inner-container {
                        width: calc(var(--slider-item-width) * ${renderReviewData.length} + 160px);
                    }
                }
            `}</style>
        </div>
    )
}

export default TestimonialSlider

 