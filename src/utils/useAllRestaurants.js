import { useEffect ,useState } from "react";

const useAllRestaurants =(url) =>{
   const [restaurants, setRestaurants] = useState([])

    useEffect(()=>{
        getRestaurant();
    },[])

    async function getRestaurant() {
        const data = await fetch(url);
        const json =  await data.json();
       
        setRestaurants(json?.data?.cards)
      
        
    }
    
    return restaurants;
    
}
export default useAllRestaurants;