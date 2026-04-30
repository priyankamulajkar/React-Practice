import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Bar
 *      - Home
 *      -About
 *      -contact us
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *    - RestaurantCard
 *    - RestaurantCard
 * Footer
 *  - Copyright
 *  - Link
 *  - Address
 */

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="logo">
              <img
                className="logo-img"
                src="https://assets.designhill.com/design-blog/wp-content/uploads/2024/06/1.jpg"
              ></img>
            </div>
          </div>
          <div className="col-md-9">
            <div className="nav-items">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const RestaurantCard = (props) => {
  console.log(props);
//   const stylecard = { backgroundColor: "red" };
const stylecard = {}
  const { resName, imgLink, resRating, cuisines, locality, deliveryTime } =
    props;
  return (
    <div className="col-md-3 " style={stylecard}>
      <div className="res-card">
        <img className="res-img" src={imgLink}></img>
        <h2 className="res-name">{resName}</h2>
        <h4 className="res-rating">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8AkDnQtcPrnBzR0fhTQInEeZuTJgtBqwL9Q&s"></img>
          {resRating} - <span>{deliveryTime} mins</span>
        </h4>
        <p className="res-desc">{cuisines}</p>
        <p className="res-place">{locality}</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="top-restaurants">
      <div className="container">
        <div className="row">
          <RestaurantCard
            resName="KFC"
            imgLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/4/11/aa4f7db1-4061-43d7-ada4-1341cb577285_243625.JPG"
            resRating="4.5"
            deliveryTime="30"
            cuisines="Burgers, Fast Food, Rolls & Wraps"
            locality="Deccan Gymkhana"
          />
          <RestaurantCard
            resName="Pizza Hut"
            imgLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/dd196a56-86a8-409b-8e29-df0dbbfd76fc_21001.JPG"
            resRating="4.1"
            deliveryTime="20"
            cuisines="Pizzas"
            locality="Shivajinagar"
          />
          <RestaurantCard
            resName="The Belgian Waffle Co."
            imgLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/d30e906d-c10a-4ae9-bb8a-e35f2424cdba_33848.JPG"
            resRating="4.6"
            deliveryTime="20"
            cuisines="Waffle, Desserts, Ice Cream, Beverages"
            locality="JM Road"
          />
          <RestaurantCard
            resName="Little Italy"
            imgLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/1/13/fab17295-ea12-4cd7-bc43-ea21f9e69f5b_6726.JPG"
            resRating="4.3"
            deliveryTime="30"
            cuisines="Italian, Pizzas, Pastas, Salads, Desserts"
            locality="Ganesh Khind"
          />
        </div>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<AppLayout />);
