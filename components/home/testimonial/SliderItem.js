import Image from "next/image";
import style from "../../../styles/reviewSlider.module.scss";
const SliderItems = ({ item }) => {
    const renderStars = () => {
        const stars = [];

        for (let i = 0; i < item.star; i++) {
            stars.push(<i className="fa fa-star text-yellow-400" aria-hidden="true" key={item.name + i} />);
        }
        return stars;
    };
    return (
        <div className={style["slider-item"]}>
            <div className={style["slider-item-header"]}>
                <div className={style["photo-container"]}>
                    <Image src={item.photo} placeholder="blur" width={50} height={50} alt="review_photo" className={style["profile-pic"]} />
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
    );
};

export default SliderItems;

/*
 * Created on Tue Jul 13 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */

