const SkillsAccordian = ({title, meta, data, icon, last}) => {
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
        <div className={`w-full max-w-full desktop-st:max-w-md space-y-4 accordian-item`}>  
            <div className="flex justify-between bg-white px-6 py-2 rounded-md overflow-hidden border border-solid border-sec">
                <div className="flex flex-col justify-center">
                    <i className={`${icon} text-3xl text-main`} />
                </div>
                <div>
                    <h3 className="text-main">{title}</h3>
                    <span className="text-gray-600">{meta}&nbsp;</span>
                </div>
                <div className="flex flex-col justify-center">
                <i className="fas fa-caret-down text-xl text-main" />
                </div>
            </div>
            <div className="space-y-6">
                {renderData}
            </div>
            <style jsx>{`
            @media only screen and (min-width: 992px) and (max-width: 1280px) {
                    .accordian-item {
                        display: ${last ? "none" : "block"}
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