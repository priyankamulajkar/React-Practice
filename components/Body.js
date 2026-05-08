import RestaurantCard from "./RestaurantCard";
import resInfoList from "../utils/MockData";
import { useState } from "react";

const Body = () => {
  let [listOfRestaurantswithState, setListOfRestaurantswithState] = useState(resInfoList);
  let listOfRestaurants = resInfoList;
  return (
    <div className="top-restaurants max-w-[1240px] mx-auto md:py-20 py-5 xl:px-0 px-[20px]" >
      <div className="">
        Search
      </div>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded my-5" onClick={() =>{
        listOfRestaurantswithState = listOfRestaurantswithState.filter((res) => {
          return res.info.avgRating > 4.5;
        })
        setListOfRestaurantswithState(listOfRestaurantswithState);
      }}>Top Rated restaurants</button>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
            { listOfRestaurantswithState.map((currentRestaurant) => <RestaurantCard key= {currentRestaurant.info.id} resObj ={currentRestaurant}/>)}
        </div> 
    </div>
  );
};

export default Body;