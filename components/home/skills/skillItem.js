
const SkillItem = ({item}) => {
    return (
        <div className="space-y-2">
        <div className="flex flex-row justify-between">
            <div className="font-semibold text-gray-600">{item.name}</div>
            <span className="text-gray-600">{item.skill}%</span>
        </div>
        <div className="relative">
            <div className="w-full h-2 bg-sec-lg rounded-full">
                <div className="h-full bg-sec rounded-l-full" style={{width: `${item.skill}%`}}></div>
            </div>
        </div>
    </div>
    )
}

export default SkillItem