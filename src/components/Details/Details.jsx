import "./Details.css";
let Details = () => {
  return (
    <div className="details-cont">
      <h1 className="detail-heading">Video KYC</h1>
      <div className="calender-cont-details">
        <div className="calender-cont">
          <p className="detail">Schedule on</p>
          <div className="calender-details-cont">
            <div className="daynum">
              <div className="num">
                <p className="date"> 23</p>
              </div>
              <div className="monthday">oct,23</div>
            </div>
            <div className="bank-finan-details-cont">
              <h1 className="bank-heading">Utkrash SF Bank FD Plan 2</h1>
              <div className="amount-intrest-details-cont">
                <div className="intrest-cont">
                  <h1 className="depositeamount">Deposit Amount</h1>
                  <h1 className="amount">20,000</h1>
                </div>
                <div className="intrest-cont">
                  <h1 className="depositeamount">Tennure</h1>
                  <h1 className="amount">20,000</h1>
                </div>
                <div className="intrest-cont">
                  <h1 className="depositeamount">Intrest Rate</h1>
                  <h1 className="amount">20,000</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="complete-reshedule-cont">
          <div className="Complete">Complete Now</div>
          <div className="Reshedule">Reshedule</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
