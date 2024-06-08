import logo from "../../asserts/logo.png";
import profile from "../../asserts/myprofile.png";
import Menu from "../Menu/Menu.jsx";

import Support from "../Support/Support.jsx";

import { Component } from "react";

import "./index.css";

class Header extends Component {
  state = { value: false, value1: false };

  dropDown = () => {
    this.setState((prevState) => ({ value: !prevState.value }));
  };

  supportClick = () => {
    this.setState((prevState) => ({ value1: !prevState.value1 }));
  };

  render() {
    const { value, value1 } = this.state;
    return (
      <>
        <div className="navbar">
          <img src={logo} alt="logo" className="logo" />
          <div className="option-cont">
            <ul className="options">
              <li className="op">Dashboard</li>
              <li className="op">FAQs</li>
              <button
                type="button"
                className="support-btn"
                onClick={this.supportClick}
              >
                <li className="op">Support</li>{" "}
              </button>
            </ul>
            <div onClick={this.dropDown} className="dropdown">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
        </div>
        {value && <Menu />}
        {value1 && <Support />}
      </>
    );
  }
}

export default Header;
