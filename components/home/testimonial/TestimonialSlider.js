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
    const currentTransPosition = useRef(0);
    const currentTransPosition1 = useRef(0);
    const maxRightTransition = useRef(0)
    let startTouchPosition = null;
    let currentTouchPosition = null;

    // reset slider transition position to zero on window resize to avoid layout mess (workaround)
    useEffect(() => {
        const resetSlider = () => {
            mainContainer.current.style.transform = "translate3d(0px, 0px, 0px)"
            currentTransPosition1.current = 0
            currentTransPosition.current = 0
        }
        window.addEventListener('resize', resetSlider)
    }, [])


    let mousePressed = false

    const handleMouseUp = (e) => {
        console.log("Mouse Leave", e)
        mousePressed = false
    }


    const handleMouseMove = (e) => {
        if (mousePressed){
            console.log(e)
        }
        
    }


    // this event callback is triggered on touch start. Save touch start position so we can compare it with current touch position to find if the user has swiped left or right
    const handleTouchStart = (e) => {
        if (e.type === "mousedown"){
            e.preventDefault()
            startTouchPosition = e.clientX
            mousePressed = true
        }
        else{
            startTouchPosition = e.touches[0].clientX;
                                

        }

        
    }

    // this event callback is triggered when the touch end in this callback first we check if the slider is transitioned more then its container on
    // left and right during touch move event if its transitioned more then 0 on left we reset it to zero and if its transitioned more then container width to right
    // we reset its transitioned to containers width. This way the slider does not go outside container from both left and right.
    // next if startTouchPosition and currentTouchPosition is captured by touchStart and touchMove event callback we find out if its a left swipe or right swipe and depending on 
    // that we increase or decrease the transition of the container by sliderItem width + padding to meke it slide exactly 1 item inside the container
    const handleTouchEnd = (e) => {
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
    // Touch Move Event. This callback will slide the slider as user holds and move touch
    // This event callback is triggered when user hold touch and move. In this callback we capture currentTouchposition and if the currentTouchPosition is greater 
    // then touchStartPosition then its a right swipe else its a left swipe. Then based on the startTouchvalue and currentTouchValue we find how much we have to transition 
    // the slider. Then before transitioning the slider we check if the transition amount is > 0 or < container width we devide it by 6 to create animation like the slider 
    // cannot slide anymore. then we transition the slider and in touchend callback we potion the slider based on current transition 
    const handleTouchMove = (e) => {
        
        if (!maxRightTransition.current){
            maxRightTransition.current = -(((mainContainer.current.firstChild.clientWidth + 20) * reviewData.length) - 20 - mainContainer.current.parentNode.clientWidth)
        }
        // Get Touches object
        if (e.type === "mousemove"){
            console.log(mousePressed)
            if (mousePressed){
                console.log("AaSSSDD")
                // get current Page Position same as clientX
                currentTouchPosition = e.clientX
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
        }
        else{

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



    }

    return (
        <div className={style['outer-container']}>
            <div className={style['inner-container'] + " inner-container"} onTouchMove={handleTouchMove} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onMouseDown={handleTouchStart} onMouseUp={handleTouchEnd} onMouseMove={handleTouchMove} ref={mainContainer}>
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
