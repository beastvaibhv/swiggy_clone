import { IMG_CDN_URL } from "./Config";

const RestaurantCard = (props)=>{
    const {name, deliveryTime, costForTwoString, cloudinaryImageId, cuisines} = props.restaurantData;
    
    return (<div className="Restaurant">
        <img src= {IMG_CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <h6>{deliveryTime} minutes</h6>
        <h6>{costForTwoString}</h6>
        <h6>{cuisines.join(", ")}</h6>

    </div>

    );
};

export default RestaurantCard;
 