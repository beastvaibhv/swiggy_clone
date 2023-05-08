import { IMG_CDN_URL } from "../Config";

const RestaurantCard = (props)=>{
    const {name, deliveryTime, costForTwoString, cloudinaryImageId, cuisines,user} = props.restaurantData;
    
    return (<div className="w-52 h-64 p-1 m-4 bg-gray-100">
        <img className="w-52" src= {IMG_CDN_URL + cloudinaryImageId} />
        <h3 className="font-bold">{name}</h3>
        <h6 className="font-light text-xs">{deliveryTime} minutes</h6>
        <h6 className="font-light text-xs">{costForTwoString}</h6>
        <h6 className="font-light text-xs">{cuisines?.join(", ")}</h6>
        {/**<h6 className="font-medium text-xs">{props.user.email}</h6>
        <h6 className="font-medium text-xs">{props.user.name}</h6>*/}

    </div>

    );
};

export default RestaurantCard;
 