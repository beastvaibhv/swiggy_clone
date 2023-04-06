import Restaurant from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import { filterData } from "../utils/helper";
import { FETCH_RESTAURANT_URL } from "../Config";
import useOnline from "../utils/useOnline";

const Body =() =>{
    const [searchText, setSearchText] = useState("");
    const [allRestaurants,setAllRestaurants] = useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);
    const isOnline = useOnline();
   
   
    useEffect(()=>{
        getRestaurant();
    },[])

    async function getRestaurant() {
        const data = await fetch(FETCH_RESTAURANT_URL);
        const json =  await data.json();
        setFilterRestaurants(json?.data?.cards)
        setAllRestaurants(json?.data?.cards)
    }
    
//early return:
// if(!allRestaurants) return null;

  
  
  if(!isOnline){ 
     return(<h1> Ooops seems like you are not connected to internet </h1>);
  }
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