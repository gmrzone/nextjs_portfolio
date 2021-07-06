import SkillItems from './SkillItems';
import SkillsItemHeader from './SkillItemHeader'
import DesktopFullSkillModalItem from './DesktopFullSkillModalItem';
import { useState } from 'react'
const SkillsAccordianItem = ({item: {title, meta, data, icon, id,}, last ,  activeAccordian , activateAccordian}) => {
    const [desktopFullSkillActive, setDesktopFullSkillActive] = useState(false)
    const closeDesktopSkillModal = () => {
        setDesktopFullSkillActive(false)
    }
    return (
        <div className={`w-full max-w-full desktop-st:max-w-md space-y-2 accordian-item`}>
            <DesktopFullSkillModalItem active={desktopFullSkillActive} close={closeDesktopSkillModal} title={title}/>
            <SkillsItemHeader icon={icon} title={title} meta={meta} activeAccordian={activeAccordian} activateAccordian={activateAccordian} id={id}/>
            <SkillItems data={data} activeAccordian={activeAccordian} id={id}/>
            <div className="bg-sec text-white px-3 font-bold mb-8 py-3 text-center shadow-md rounded-md hidden cursor-pointer transition-colors duration-300 bg-opacity-100 hover:bg-opacity-75 desktop-st:block" onClick={() => setDesktopFullSkillActive(true)}>
                View All
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

export default SkillsAccordianItem

/*
 * Created on Tue Jul 06 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */
