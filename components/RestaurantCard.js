import { RES_URL, Res_Rating_URL } from "../utils/constant";
const RestaurantCard = (props) => {


console.log("props", props)
//   const stylecard = { backgroundColor: "red" };
const stylecard = {}
  const { name, cloudinaryImageId, avgRating, cuisines, areaName, sla } =
    props?.resObj?.info;
  return (
    <div className="mb-6" style={stylecard}>
        <img className="rounded-xl object-cover mb-5 min-h-[349px]" src={RES_URL + cloudinaryImageId}></img>
        <h2 className="text-[18px] font-medium text-[#02060ceb]">{name}</h2>
        <h4 className="flex text-[16px] font-[400] text-[#02060ceb]">
          <img className="w-[15px] object-contain mr-2" src={Res_Rating_URL}></img>
          {avgRating} -  <span className="font-[600] text-[16px] ml-1"> {sla?.slaString}</span>
        </h4>
        <p className="font-[16px] text-[#02060c99]">{cuisines.join(', ')}</p>
        <p className="font-[16px] text-[#02060c99]">{areaName}</p>
    </div>
  );
};

export default RestaurantCard;