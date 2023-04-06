import Restaurant from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import { filterData } from "../utils/helper";
import { FETCH_RESTAURANT_URL } from "../Config";
import useAllRestaurants from "../utils/useAllRestaurants";

const Body =() =>{
    const [searchText, setSearchText] = useState("");
    const [allRestaurants,setAllRestaurants] = useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);
    
    const restaurants = useAllRestaurants(FETCH_RESTAURANT_URL);
    
    useEffect(()=>{
       updateState() 
    },[]);

    async function updateState() { 
        
        setFilterRestaurants(restaurants)
        setAllRestaurants(restaurants)
    };
//early return:
// if(!allRestaurants) return null;
   
    return allRestaurants?.length === 0 ?(<Shimmer/>):
   
    ( <>
    
        

        <div className="search-container">
            <input
              type="text"
              className ="input-search" 
              placeholder="search restaurant, food items" 
              
              value = {searchText} 
              onChange={(e)=>{setSearchText(e.target.value) }} />
            
            <button className="search-button" onClick={()=>
             {
                const data = filterData(allRestaurants, searchText);
             setFilterRestaurants(data);}
             }
             >Search</button>
        </div>
        <div className="restaurant-list">
        { (filterRestaurants?.length === 0) ?"No Search Result":
            filterRestaurants.map((restaurant) => {
                return(
                <Link to={"/restaurant/" +restaurant?.data?.data?.id} key = {restaurant?.data?.data?.id}>
                <Restaurant restaurantData ={restaurant?.data?.data} />
                </Link>
                )
            })
            
        }
        {/* or
        restaurantList.map((restaurant) => <RestaurantCard {...restaurant.data.data}/>)*/}

            
        

        </div>
        </>
    );
};
export default Body;