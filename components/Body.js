import RestaurantCard from "./RestaurantCard";
import resInfoList from "../utils/MockData";

const Body = () => {
  return (
    <div className="top-restaurants max-w-[1240px] mx-auto md:py-20 py-5">
        <div className="grid grid-cols-4 gap-5">
            { resInfoList.map((currentRestaurant) => <RestaurantCard key= {currentRestaurant.info.id} resObj ={currentRestaurant}/>)}
        </div> 
    </div>
  );
};

export default Body;