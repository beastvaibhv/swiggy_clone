import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../Config";
const useRestaurant = (resId) =>{
    const [restaurant, setRestaurant] = useState(null);
    
    useEffect( () => {
        getRestaurant();
    },[]);
     
    async function getRestaurant(){
        const data = await fetch( FETCH_MENU_URL + resId);
        const json = await data.json();
        
        setRestaurant(json?.data?.cards[0].card?.card);
    }

    return restaurant
    
}

export default useRestaurant;