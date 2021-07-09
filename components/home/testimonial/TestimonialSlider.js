import { reviewData } from '../data';
import SliderItems from './SliderItem';
import style from '../../../styles/reviewSlider.module.scss';

const TestimonialSlider = () => {
    const renderReviewData = reviewData.map(x => {
        return (
            <SliderItems item={x} key={x.id}/>
        )
    })
    return (
        <div className={style['outer-container']}>
            <div className={style['inner-container'] + " inner-container"}>
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

 