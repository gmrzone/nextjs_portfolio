import { reviewData } from '../data';
import SliderItems from './SliderItem';
import style from '../../../styles/reviewSlider.module.scss';
import { useRef, useState } from 'react'

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
    const slideCount = useRef(1)
    let maxRightTransaction = 0
    const maxLeftTransaction  = 0
    let startTouchPosition = null;
    let currentTouchPosition = null;
    let previousTouchPosition = null;                                                 
    let currentLiveTransition = 0

    const handleTouchStart = (e) => {
        startTouchPosition = e.touches[0].clientX;                                      
        
    }
    const handleTouchEnd = (e) => {
        currentTransPosition1.current = currentTransPosition.current
        
        if (currentTransPosition1.current > 0){
            console.log('Stop Left')
            mainContainer.current.style.transitionDuration = "0.3s"
            mainContainer.current.style.transform = "translate3d(0px, 0px, 0px)"
            currentTransPosition1.current = 0
            currentTransPosition.current = 0
        }
        else if (currentTransPosition1.current < maxRightTransaction){
            console.log("Stop Right")
            mainContainer.current.style.transitionDuration = "0.3s"
            mainContainer.current.style.transform = `translate3d(${maxRightTransaction}px, 0px, 0px)`
            currentTransPosition1.current = maxRightTransaction
            currentTransPosition.current = maxRightTransaction
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
                if (slideCount.current < reviewData.length){
                    if (currentTransPosition1.current > maxRightTransaction){
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
    }
    // Touch Move Event
    const handleTouchMove = (e) => {
        

        if (!maxRightTransaction){
            maxRightTransaction = -(((mainContainer.current.firstChild.clientWidth + 20) * reviewData.length) - 20 - mainContainer.current.parentNode.clientWidth)
        }
        // Get Touches object
        const touches = e.touches ;
        // get current Page Position same as clientX
        currentTouchPosition = touches[0].clientX
        let tr = currentTransPosition1.current + (startTouchPosition > currentTouchPosition ? -(startTouchPosition - currentTouchPosition) : (currentTouchPosition - startTouchPosition))
        if (tr > 0){
            tr /= 6    
        }
        else if (maxRightTransaction && tr < maxRightTransaction){
            let extra_trans = maxRightTransaction - tr
            extra_trans /= 6
            tr = maxRightTransaction - extra_trans
            
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
                    transform: translate3d(${currentTrans}px, 0px, 0px);
                    
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

 