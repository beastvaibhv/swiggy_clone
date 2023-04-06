export const filterData = (restaurants, searchText)=>{
    const Data = restaurants.filter((restaurant)=> 
        restaurant?.data?.data?.name.toLowerCase().includes(searchText.toLowerCase())
        );
    return Data;
}