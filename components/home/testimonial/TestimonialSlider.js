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
    const currentTransPosition1 = useRef(0)
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
        // const transitionAmount = getComputedStyle(mainContainer.current).getPropertyValue('--slider-item-width')
        if (!maxRightTransaction){

        }
        maxRightTransaction = -(((mainContainer.current.firstChild.clientWidth + 20) * reviewData.length) - 20 - mainContainer.current.clientWidth)
        if (currentTransPosition1.current > 0){
            mainContainer.current.style.transitionDuration = "0.3s"
            mainContainer.current.style.transform = "translate3d(0px, 0px, 0px)"
            currentTransPosition1.current = 0
            currentTransPosition.current = 0
        }
        else if (currentTransPosition1.current < maxRightTransaction){
            mainContainer.current.style.transitionDuration = "0.3s"
            mainContainer.current.style.transform = `translate3d(${maxRightTransaction}px, 0px, 0px)`
            currentTransPosition1.current = maxRightTransaction
            currentTransPosition.current = maxRightTransaction
        }
        console.log("inner Width", maxRightTransaction, currentTransPosition1.current)
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
    // Touch Move Event
    const handleTouchMove = (e) => {
        
        

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

 