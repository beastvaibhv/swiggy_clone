
const ShimmerRestaurantCard = ()=>{
    
    return (<div className="w-52 h-64 p-1 m-4 bg-gray-100">
        <img className="w-52 h-32"  src="https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png" alt="" />
        <div>
            <h1>              </h1>
        </div>
    </div>

    );
};


const ShimmerBody =() =>{
    

    return(
        
            <>
            <div className="flex flex-wrap justify-center items-center">
            <div className="border rounded overflow-hidden flex p-1 m-1">
            <input
              type="text"
              className ="px-5 py-0.5" 
              placeholder="Search..." 
            />

            <button className="rounded-lg px-2 py-0.5 bg-purple-900 text-gray-100 text-xs hover:bg-gray-700 duration-300" 
             >Search</button>
        </div>
        </div>
            <div className="flex flex-wrap justify-center items-baseline">

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