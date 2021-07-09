import Image from 'next/image';
const SliderItems = ({ item }) => {
    const renderStars = () => {
        const stars = []
        
        for (let i=0; i < item.star; i++){
            stars.push(<i className="fa fa-star text-yellow-400" aria-hidden="true" />)
        }
        return stars
    }
    return (
        <div className="bg-white rounded-md p-4 w-96 max-w-sm h-60 desktop-st:h-52">
            <div className="flex space-x-4">
                <div>
                    <Image src={item.photo} placeholder="blur" width={50} height={50} alt="review_photo" className="rounded-full"/>
                </div>
                <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <div>{renderStars()}</div>
                </div>
            </div>
            <div>
                <p className="text-md">{item.review}</p>
            </div>
        </div>
    )
}

export default SliderItems