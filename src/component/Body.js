import { restaurantList} from "./Config";
import Restaurant from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const filterData = (restaurants, searchText)=>{
    const Data = restaurants.filter((restaurant)=> 
        restaurant?.data?.data?.name.toLowerCase().includes(searchText.toLowerCase())
        );
    return Data;

    

}
const Body =() =>{
    useEffect(()=>{
        getRestaurant();
    },[])

    async function getRestaurant() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING");
        const json =  await data.json();
        setFilterRestaurants(json?.data?.cards)
        setAllRestaurants(json?.data?.cards)
    }
    const [searchText, setSearchText] = useState("");
    const [allRestaurants,setAllRestaurants] = useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);
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
        { (filterRestaurants.length === 0) ?"No Search Result":
            filterRestaurants.map((restaurant) => {
                return(<Restaurant restaurantData ={restaurant.data.data} key = {restaurant.data.data.id}/>)
            })
            
        }
        {/* or
        restaurantList.map((restaurant) => <RestaurantCard {...restaurant.data.data}/>)*/}

            
        

        </div>
        </>
    );
};
export default Body;