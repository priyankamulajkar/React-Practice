import RestaurantCard from "./RestaurantCard";
import resInfoList from "../utils/MockData";

const Body = () => {
  return (
    <div className="top-restaurants">
      <div className="container">
        <div className="row">
            { resInfoList.map((currentRestaurant) => <RestaurantCard key= {currentRestaurant.info.id} resObj ={currentRestaurant}/>)}
        </div> 
      </div>
    </div>
  );
};

export default Body;