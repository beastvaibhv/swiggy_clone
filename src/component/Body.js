import Restaurant from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import { filterData } from "../utils/helper";
import { FETCH_RESTAURANT_URL } from "../Config";
import useOnline from "../utils/useOnline";

const Body =(props) =>{
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

    ( <div>



        <div className="flex flex-wrap justify-center items-center">
            <div className="border rounded-lg overflow-hidden flex p-1 m-1">
            <input
              type="text"
              className ="px-2 py-0.5 " 
              placeholder="Search..." 

              value = {searchText} 
              onChange={(e)=>{setSearchText(e.target.value) }} />

            <button className="rounded-lg px-0.5 py-0.5 bg-purple-900 text-gray-100 text-xs hover:bg-gray-700 duration-300" onClick={()=>
             {
                const data = filterData(allRestaurants, searchText);
             setFilterRestaurants(data);}
             }
             >Search</button>
        </div>
        </div>

        <div className="flex flex-wrap justify-center items-baseline">
        { (filterRestaurants?.length === 0) ?"No Search Result":
            filterRestaurants.map((restaurant) => {
                return(
            
                    <Link to={"/restaurant/" +restaurant?.data?.data?.id} key = {restaurant?.data?.data?.id}>
                    <Restaurant restaurantData ={restaurant?.data?.data} user={props.user}/>
                    </Link>
                    )
            })


        }
        {/* or
        restaurantList.map((restaurant) => <RestaurantCard {...restaurant.data.data}/>)*/}
       </div>
        </div>
    );
};
export default Body;