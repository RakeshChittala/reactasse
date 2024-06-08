// import React from "react";
// import Fdprofile from "../Fdprofile/Fdprofile.jsx";
// import "./dashboard.css";
// import Timeline from "../Timeline/Timeline.jsx";
// import Financecompany from "../Financecompany/Financecompany.jsx";

// import bajaj from "../../asserts/bajaj.png";
// import mahi from "../../asserts/mahi.png";
// import shriram from "../../asserts/shriram.png";
// import group from "../../asserts/Group 2252@2x.png";

// const bankDeatils = [
//   {
//     bankname: "Utkrash Small Finance Bank",
//     bankLogo: "../../asserts/Group 2252@2x.png",
//     tick: "../../asserts/violet.png",
//     b1: "Highest Intrest rate",
//     b2: "RBI insured",
//   },
//   {
//     bankname: "Bajaj Finserv",
//     bankLogo: "../../asserts/bajaj.png",
//     tick: "../../asserts/blue.png",
//     b1: "Crisil AAA Rated",
//     b2: "No Video KYC Required",
//   },
//   {
//     bankname: "Shriram Finserv",
//     bankLogo: "../../asserts/shriram.png",
//     tick: "../../asserts/black.png",
//     b1: "Crisil AAA Rated",
//     b2: "No Video KYC Required",
//   },
//   {
//     bankname: " Mahindra Finserv",
//     bankLogo: "../../asserts/mahi.png",
//     tick: "../../asserts/orange.png",
//     b1: "Crisil AAA Rated",
//     b2: "No Video KYC Required",
//   },
// ];

// const Dashboard = () => {
//   return (
//     <>
//       <div className="dashboard">
//         <h1 className="name">Welcome , jhonPaul</h1>
//         <div className="pofile-graphs">
//           <Fdprofile />
//           <Timeline />
//         </div>
//         <div className="finance-and-details-con">
//           <div className="finance-company-con">
//             {bankDeatils.map((each) => (
//               <Financecompany key={each.id} image={each} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;
import React from "react";
import Fdprofile from "../Fdprofile/Fdprofile.jsx";
import Details from "../Details/Details.jsx";
import "./dashboard.css";
import Timeline from "../Timeline/Timeline.jsx";
import Financecompany from "../Financecompany/Financecompany.jsx";

import bajaj from "../../asserts/bajaj.png";
import mahi from "../../asserts/mahi.png";
import shriram from "../../asserts/shriram.png";
import group from "../../asserts/Group 2252@2x.png";
import violet from "../../asserts/violet.png";
import blue from "../../asserts/blue.png";
import black from "../../asserts/black.jpg";
import orange from "../../asserts/orange.jpg";

const bankDetails = [
  {
    id: 1,
    bankname: "Utkrash Small Finance Bank",
    bankLogo: group,
    tick: violet,
    b1: "Highest Interest rate",
    b2: "RBI insured",
    color: "violet",
    btnc: "btn-violet",
    b1c: "b1-violet",
  },
  {
    id: 2,
    bankname: "Bajaj Finserv",
    bankLogo: bajaj,
    tick: blue,
    b1: "Crisil AAA Rated",
    b2: "No Video KYC Required",
    color: "blue",
    btnc: "btn-blue",
    b1c: "b1-blue",
  },
  {
    id: 3,
    bankname: "Shriram Finserv",
    bankLogo: shriram,
    tick: black,
    b1: "Crisil AAA Rated",
    b2: "No Video KYC Required",
    color: "black",
    btnc: "btn-black",
    b1c: "b1-black",
  },
  {
    id: 4,
    bankname: "Mahindra Finserv",
    bankLogo: mahi,
    tick: orange,
    b1: "Crisil AAA Rated",
    b2: "No Video KYC Required",
    color: "orange",
    btnc: "btn-orange",
    b1c: "b1-orange",
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="name">Welcome, JohnPaul</h1>
      <div className="pofile-graphs">
        <Fdprofile />
        <Timeline />
      </div>
      <div className="finance-and-details-con">
        <div className="finance-company-con">
          {bankDetails.map((each) => (
            <Financecompany key={each.id} image={each} />
          ))}
        </div>
        <div className="details-sec">
          <Details />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
