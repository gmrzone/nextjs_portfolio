import SectionHeader from "../../common/SectionHeader";
import TestimonialSlider from "./TestimonialSlider";
const Testimonial = () => {
    return (
        <div className="mt-10 desktop-st:mt-16 bg-main dark:bg-main-dark transition-colors duration-300 py-8">
            <div className="container">
                <SectionHeader title="Testimonials" meta="My Reviews" inverted={true} />
                <TestimonialSlider />
            </div>
        </div>
    );
};

export default Testimonial;

/*
 * Created on Tue Jul 13 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */
