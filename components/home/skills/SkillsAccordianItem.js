const SkillsAccordian = ({item: {title, meta, data, icon, id,}, last ,  activeAccordian , activateAccordian}) => {
    const renderData = data.map((x, i) => {
        return (
            <div key={i} className="space-y-2">
                <div className="flex flex-row justify-between">
                    <div className="font-semibold text-gray-600">{x.name}</div>
                    <span className="text-gray-600">{x.skill}%</span>
                </div>
                <div className="relative">
                    <div className="w-full h-2 bg-sec-lg rounded-full">
                        <div className="h-full bg-sec rounded-l-full" style={{width: `${x.skill}%`}}></div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className={`w-full max-w-full desktop-st:max-w-md space-y-2 accordian-item`} onClick={() => activateAccordian(id)}>  
            <div className="flex justify-between bg-white px-6 py-2 rounded-md overflow-hidden cursor-pointer shadow-lg">
                <div className="flex flex-col justify-center">
                    <i className={`${icon} text-3xl text-main`} />
                </div>
                <div>
                    <h3 className="text-main">{title}</h3>
                    <span className="text-gray-600">{meta}&nbsp;</span>
                </div>
                <div className="flex flex-col justify-center">
                    <i className={`fas fa-caret-down text-xl text-main transition-transform duration-300 delay-100 desktop-st:hidden desktop-st:transition-none desktop-st:rotate-0 ${activeAccordian === id ? "rotate-180" : "rotate-0"}`} />
                </div>
            </div>
            <div className={`space-y-6 bg-white px-4 py-6 shadow-md rounded-md accordian-content overflow-hidden`}>
                {renderData}
            </div>
            <style jsx>{`
                @media only screen and (min-width: 992px) and (max-width: 1280px) {
                    .accordian-item {
                        display: ${last ? "none" : "block"}
                    }
                }
                @media (max-width: 992px){
                    .accordian-content {
                        height: auto;
                        max-height: ${activeAccordian === id ? "1000px" : "0px"};
                        transition: max-height 0.4s ease-in-out, padding 0.35s 0.07s ease-in-out;
                        padding: ${activeAccordian === id ? "" : "0px"};
                        
                    }
                }
            `}</style>
        </div>
    )
}

export default SkillsAccordian

/*
 * Created on Tue Jul 06 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */
