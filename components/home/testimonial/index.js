import SectionHeader from "../../common/SectionHeader";
import TestimonialSlider from "./TestimonialSlider";
const Testimonial = () => {
    return (
        <div className="mt-10 desktop-st:mt-16 bg-main  ">
            <div className="container">
                <SectionHeader title="Testimonials" meta="My Review" inverted={true} />
                <TestimonialSlider />
            </div>
        </div>
    );
};

export default Testimonial;
