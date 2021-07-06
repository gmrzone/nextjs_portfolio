const SkillsAccordian = ({title, meta, data}) => {
    const renderData = data.map((x, i) => {
        return (
            <div key={i} className="">
                <div>{x.name}</div>

                <div>
                    <div className="w-full h-3 bg-white">
                        <div className="h-full bg-sec" style={{width: `${x.skill}%`}}></div>
                    </div>
                    {x.skill}%
                </div>
            </div>
        )
    })
    return (
        <div>  
            <div>
                <h3>{title}</h3>
                <span>{meta}</span>
            </div>
            <div>
                {renderData}
            </div>
        </div>
    )
}

export default SkillsAccordian

/*
 * Created on Tue Jul 06 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */
