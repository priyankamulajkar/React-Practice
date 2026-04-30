import { RES_URL, Res_Rating_URL } from "../utils/constant";
const RestaurantCard = (props) => {


console.log("props", props)
//   const stylecard = { backgroundColor: "red" };
const stylecard = {}
  const { name, cloudinaryImageId, avgRating, cuisines, areaName, deliveryTime } =
    props?.resObj?.info;
  return (
    <div className="col-md-3 " style={stylecard}>
      <div className="res-card">
        <img className="res-img" src={RES_URL + cloudinaryImageId}></img>
        <h2 className="res-name">{name}</h2>
        <h4 className="res-rating">
          <img src={Res_Rating_URL}></img>
          {avgRating} - <span>{deliveryTime} mins</span>
        </h4>
        <p className="res-desc">{cuisines.join(', ')}</p>
        <p className="res-place">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;