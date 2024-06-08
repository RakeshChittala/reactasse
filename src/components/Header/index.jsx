import logo from "../../asserts/logo.png";
import "./index.css";

let Header = () => (
  <div className="navbar">
    <img src={logo} alt="logo" className="logo" />
    <div className="option-cont">
      <ul className="options">
        <li className="op">Dashboard</li>
        <li className="op">FAQs</li>
        <li className="op">Support</li>
      </ul>
    </div>
  </div>
);

export default Header;
