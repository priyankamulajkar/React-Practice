import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="logo">
              <img
                className="logo-img"
                src={LOGO_URL}
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

export default Header;