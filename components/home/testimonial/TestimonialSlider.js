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
    let startTouchPosition = null;
    let currentTouchPosition = null;
    let previousTouchPosition = null;
    const currentTransPosition = useRef(0);
    const currentTransPosition1 = useRef(0)                                                   
    let currentLiveTransition = 0

    const handleTouchStart = (e) => {
        startTouchPosition = e.touches[0].clientX;                                      
        
    }
    const handleTouchEnd = (e) => {
        currentTransPosition1.current = currentTransPosition.current
        if (currentTransPosition1.current > 0){
            mainContainer.current.style.transitionDuration = "0.3s"
            mainContainer.current.style.transform = "translate3d(0px, 0px, 0px)"
            currentTransPosition1.current = 0
            currentTransPosition.current = 0
        }

        // const transitionAmount = getComputedStyle(mainContainer.current).getPropertyValue('--slider-item-width')
        
        // if (currentTouchPosition){
        //     if (currentTouchPosition > startTouchPosition){

        //         currentTransPosition = !currentTransPosition ? (0 - parseInt(transitionAmount)).toString().concat(transitionAmount.slice(-1)) : (parseInt(currentTransPosition) - parseInt(transitionAmount)).toString().concat(transitionAmount.slice(-1))
        //     }
        //     else{

        //         currentTransPosition = !currentTransPosition ? (0 + parseInt(transitionAmount)).toString().concat(transitionAmount.slice(-1)) : (parseInt(currentTransPosition) + parseInt(transitionAmount)).toString().concat(transitionAmount.slice(-1))
        //     }
            
        // }
        // // console.log(currentTransPosition)    
    }
    const handleTouchMove = (e) => {
        
        

        
        const touches = e.touches ;
        currentTouchPosition = touches[0].pageX
        let tr = currentTransPosition1.current + (startTouchPosition > currentTouchPosition ? -(startTouchPosition - currentTouchPosition) : (currentTouchPosition - startTouchPosition))
        if (tr > 0){
            tr = tr /= 4    
        }
        mainContainer.current.style.transitionDuration = '0s'
        mainContainer.current.style.transform = `translate3d(${tr}px, 0px, 0px)`
        console.log(tr)
        currentTransPosition.current = tr
        // setCurrentTrans(touches[0].pageX)


        // if (startTouchPosition){
        //     if (!previousTouchPosition){
        //         previousTouchPosition = startTouchPosition
        //     }
        //     if (currentTouchPosition < previousTouchPosition){
        //         console.log("Swipe Left")
                
        //         currentLiveTransition =  startTouchPosition - currentTouchPosition
                
        //     }
        //     else{
                
        //         currentLiveTransition =  startTouchPosition + currentTouchPosition
        //         console.log("Swipe Right")
 
        //     }
        //     // currentLiveTransition =  startTouchPosition - currentTouchPosition
        //     // mainContainer.current.style.transitionDuration = '0s'
        //     // mainContainer.current.style.transform = `translate3d(-${currentLiveTransition}px, 0px, 0px)`
        //     // console.log(currentLiveTransition)
        // }
        // previousTouchPosition = currentTouchPosition
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

 