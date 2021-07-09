import { reviewData } from '../data';
import SliderItems from './SliderItem';
const TestimonialSlider = () => {
    const renderReviewData = reviewData.map(x => {
        return (
            <SliderItems item={x} key={x.id}/>
        )
    })
    return (
        <div className="w-full relative overflow-hidden pb-12">
            <div className="flex space-x-5 overflow-hidden" style={{width: "600%"}}>
                {renderReviewData}
            </div>
        </div>
    )
}

export default TestimonialSlider

 