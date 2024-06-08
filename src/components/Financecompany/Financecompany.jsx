// import "./Financecompany.css";

// let Financecompany = (props) => {
//   const { image } = props;
//   const { bankname, bankLogo, tick, b1, b2 } = image;
//   return (
//     <div className="finance-company">
//       <div className="icon-bankname-con">
//         <img src={bankLogo} alt="bank" className="bankimage" />
//         <h1 className="bank-name">{bankname}</h1>
//       </div>
//       <div className="btn-con">
//         <div className="btn">
//           <img src={tick} alt="tick" className="tick" />
//           <p className="intreset-heading">{b1}</p>
//         </div>
//         <div className="btn">
//           <img src={tick} alt="tick" className="tick" />
//           <p className="intreset-heading">{b2}</p>
//         </div>
//       </div>
//       <div className="intrest-book-con">
//         <div className="intrest-con">
//           <p className="intrestupto-head">Intrest Upto</p>
//           <p className="intrest">0.0</p>
//         </div>
//         <div className="book-con">Book</div>
//       </div>
//     </div>
//   );
// };

// export default Financecompany;
import React from "react";
import PropTypes from "prop-types";
import "./Financecompany.css";

const Financecompany = ({ image }) => {
  const { bankname, bankLogo, tick, b1, b2, color, btnc, b1c } = image;
  return (
    <div className={`finance-company ${color}`}>
      <div className="icon-bankname-con">
        <img src={bankLogo} alt="bank" className="bankimage" />
        <h1 className="bank-name">{bankname}</h1>
      </div>
      <div className="btn-con">
        <div className={`btn ${b1c}`}>
          <img src={tick} alt="tick" className="tick" />
          <p className="interest-heading">{b1}</p>
        </div>
        <div className={`btn ${b1c}`}>
          <img src={tick} alt="tick" className="tick" />
          <p className="interest-heading">{b2}</p>
        </div>
      </div>
      <div className="intrest-book-con">
        <div className="interest-con">
          <p className="interestupto-head">Interest Upto</p>
          <p className="interest">0.0</p>
        </div>
        <div className={`book-con ${btnc}`}>Book</div>
      </div>
    </div>
  );
};

Financecompany.propTypes = {
  image: PropTypes.shape({
    bankname: PropTypes.string.isRequired,
    bankLogo: PropTypes.string.isRequired,
    tick: PropTypes.string.isRequired,
    b1: PropTypes.string.isRequired,
    b2: PropTypes.string.isRequired,
  }).isRequired,
};

export default Financecompany;
