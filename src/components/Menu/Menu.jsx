import "./Menu.css";

import profile from "../../asserts/myprofile.png";

import fds from "../../asserts/fds.png";
import logout from "../../asserts/logout.png";
import transaction from "../../asserts/transaction.png";

const Menu = () => {
  return (
    <div className="menu">
      <div className="profile-con">
        <img src={profile} alt="profile" className="profile" />
        <p className="profilename">My Profile</p>
      </div>
      <div className="profile-con">
        <img src={fds} alt="profile" className="profile" />
        <p className="profilename">My FDs</p>
      </div>
      <div className="profile-con">
        <img src={transaction} alt="profile" className="profile" />
        <p className="profilename">My Transaction</p>
      </div>
      <div className="profile-con">
        <img src={logout} alt="profile" className="profile" />
        <p className="profilename">Logout</p>
      </div>
    </div>
  );
};

export default Menu;
