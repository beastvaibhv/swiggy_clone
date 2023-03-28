
const ShimmerRestaurantCard = ()=>{
    
    return (<div className="ShimmerRestaurant">
        <img  src="https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png" alt="" />
        <div>
            <h1>              </h1>
        </div>
    </div>

    );
};


const ShimmerBody =() =>{
    

    return(
        
            <>
             <div className="search-container">

            <input type="text" className ="input-search"  placeholder=""/>
            <button className="search-button">Search</button>
            </div>

            <div className="restaurant-list">

            <ShimmerRestaurantCard/>
            <ShimmerRestaurantCard/>
            <ShimmerRestaurantCard/>
            <ShimmerRestaurantCard/>
            <ShimmerRestaurantCard/>
            <ShimmerRestaurantCard/>
            <ShimmerRestaurantCard/>
            <ShimmerRestaurantCard/>
            <ShimmerRestaurantCard/>
            <ShimmerRestaurantCard/>
            </div>
            
            </>
        
        
    );
};

const Shimmer = () => {
    return (
      <>
        
        
        <ShimmerBody></ShimmerBody>
      
      </>
    );
  };

export default Shimmer;