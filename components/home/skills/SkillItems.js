import SkillItem from "./skillItem";
const RenderItems = ({ data, activeAccordian, id, forceFull = false }) => {
    const renderData = data.map((x, i) => {
        return <SkillItem item={x} key={i} />;
    });
    return (
        <div
            className={`space-y-6 bg-white px-4 mb-8 py-6 rounded-md accordian-content overflow-hidden h-auto ${
                forceFull ? "shadow-none" : "shadow-md"
            }`}>
            {renderData}
            <style jsx>{`
                @media (max-width: 992px) {
                    .accordian-content {
                        height: auto;
                        max-height: ${activeAccordian === id ? "1000px" : "0px"};
                        transition: ${forceFull ? "none" : "max-height 0.4s ease-in-out, padding 0.35s 0.07s ease-in-out"};
                        padding: ${activeAccordian === id ? "" : "0px"};
                    }
                }
                @media (min-width: 993px) {
                    .accordian-content {
                        height: ${forceFull ? "auto" : "285px"};
                    }
                }
            `}</style>
        </div>
    );
};

export default RenderItems;

/*
 * Created on Wed Jul 07 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */
