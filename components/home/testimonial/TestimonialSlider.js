import { reviewData } from '../data';
import SliderItems from './SliderItem';
import style from '../../../styles/reviewSlider.module.scss';
import { useRef, useEffect } from 'react'

const TestimonialSlider = () => {
    const mainContainer = useRef()
    const renderReviewData = reviewData.map(x => {
        return (
            <SliderItems item={x} key={x.id}/>
        )
    })
    const currentTransPosition = useRef(0);    // variable to capture current transition value in mouse move or touch move
    const currentTransPosition1 = useRef(0);   // variavle to capture current transition value in mouse move or touch move
    const maxRightTransition = useRef(0);      // variable to keep track of maxRightTransition to avoid slider from getting outside of wrapper container
    let startPointerCapturePosition = null;    // variable to capture start touch or mouse drag position in handlePointerStart callback
    let currentPointerCapturePosition = null;  // variable to capture current touch position or douse drag position in handlePointerMove callback
    let mousePressed = false //                // variable to keep track if the mouse button is pressed so that the slider only slides when dragging with mouse not when moving the mouse over it (for Mouse event only)

    // reset slider transition position to zero on window resize to avoid layout mess (workaround)
    useEffect(() => {
        const resetSlider = () => {
            mainContainer.current.style.transform = "translate3d(0px, 0px, 0px)"
            currentTransPosition1.current = 0
            currentTransPosition.current = 0
        }
        window.addEventListener('resize', resetSlider)
    }, [])


    // this event callback is triggered on touch start and mouse down . Save touch start position of mouse down button press position so we can compare it with current touch position or mouse up button position to find if the user has swiped left or right
    const handlePointerStart = (e) => {
        if (e.type === "mousedown"){
            e.preventDefault()
            startPointerCapturePosition = e.clientX
            mousePressed = true
        }
        else{
            startPointerCapturePosition = e.touches[0].clientX;
                                

        }

        
    }

    // this event callback is triggered when the touch end of mouse up. in this callback first we check if the slider is transitioned more then its container on
    // left and right during touch move or mouse move event if its transitioned more then 0 on left we reset it to zero and if its transitioned more then container width to right
    // we reset its transitioned to containers width. This way the slider does not go outside container from both left and right.
    // next if startPointerCapturePosition and currentPointerCapturePosition is captured by handlePointerStart and handlePointerMove event callback we find out if its a left swipe or right swipe and depending on 
    // that we increase or decrease the transition of the container by sliderItem width + padding to meke it slide exactly 1 item inside the container
    const handlePointerEnd = (e) => {
        // It the event type is mouseup the save the status on mousePressed so we can stop sliding the slider in handlePoinerMove
        if (e.type === "mouseup"){
            mousePressed = false
        }

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
        
        if (currentPointerCapturePosition){
            let sliderItemWidth = mainContainer.current.firstChild.clientWidth
            
            if (currentPointerCapturePosition > startPointerCapturePosition){
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
    // Touch Move Event. This callback will slide the slider as user holds and move touch
    // This event callback is triggered when user hold touch and move. In this callback we capture currentPointerCaptureposition and if the currentPointerCapturePosition is greater 
    // then touchStartPosition then its a right swipe else its a left swipe. Then based on the startTouchvalue and currentTouchValue we find how much we have to transition 
    // the slider. Then before transitioning the slider we check if the transition amount is > 0 or < container width we devide it by 6 to create animation like the slider 
    // cannot slide anymore. then we transition the slider and in touchend callback we potion the slider based on current transition 
    const handlePointerMove = (e) => {
        
        if (!maxRightTransition.current){
            maxRightTransition.current = -(((mainContainer.current.firstChild.clientWidth + 20) * reviewData.length) - 20 - mainContainer.current.parentNode.clientWidth)
        }
        // Get Touches object
        // if event type is mousemove then check if the mouse button is pressed. It the button is pressed then only transition the slider else do nothing
        if (e.type === "mousemove"){
            if (mousePressed){
                // get current Page Position same as clientX
                currentPointerCapturePosition = e.clientX
                let tr = currentTransPosition1.current + (startPointerCapturePosition > currentPointerCapturePosition ? -(startPointerCapturePosition - currentPointerCapturePosition) : (currentPointerCapturePosition - startPointerCapturePosition))
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
        }
        else{

            const touches = e.touches ;
            // get current Page Position same as clientX
            currentPointerCapturePosition = touches[0].clientX
            let tr = currentTransPosition1.current + (startPointerCapturePosition > currentPointerCapturePosition ? -(startPointerCapturePosition - currentPointerCapturePosition) : (currentPointerCapturePosition - startPointerCapturePosition))
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
    }

    return (
        <div className={style['outer-container']}>
            <div className={style['inner-container'] + " inner-container"} onTouchMove={handlePointerMove} onTouchStart={handlePointerStart} onTouchEnd={handlePointerEnd} onMouseDown={handlePointerStart} onMouseUp={handlePointerEnd} onMouseMove={handlePointerMove} ref={mainContainer}>
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

 


/*
 * Created on Sat Jul 10 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */
