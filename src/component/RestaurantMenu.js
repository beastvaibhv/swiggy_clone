import {useParams} from "react-router-dom";
import { IMG_CDN_URL } from "../Config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";


const RestaurantMenu =()=>{
    
    const {resId} = useParams();
    const restaurant =  useRestaurant(resId);
    const info = restaurant?.info;
   
    return (!restaurant)?(<Shimmer/>):
    (
        <div className="restaurant-menu">
        <img src={IMG_CDN_URL + restaurant?.info?.cloudinaryImageId }/>
        <h1>{info?.name}</h1>
        <h2>Cost for Two: {info.costForTwoMessage}</h2>
        <h2>{info?.cuisines.join(" ")}</h2>
        <h2>{info?.area}</h2>
        </div>
    )

}

export default RestaurantMenu;