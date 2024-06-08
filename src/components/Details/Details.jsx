import "./Details.css";
let Details = (props) => {
  const { amount, tenure, intrest, date, bank, detail1, detail2, b1, b2 } =
    props.image;
  return (
    <div className="details-cont">
      <h1 className="detail-heading">{detail1}</h1>
      <div className="calender-cont-details">
        <div className="calender-cont">
          <p className="detail">{detail2}</p>
          <div className="calender-details-cont">
            <div className="daynum">
              <div className="num">
                <p className="date">{date}</p>
              </div>
              <div className="monthday">oct,23</div>
            </div>
            <div className="bank-finan-details-cont">
              <h1 className="bank-heading">{bank}</h1>
              <div className="amount-intrest-details-cont">
                <div className="intrest-cont">
                  <h1 className="depositeamount">Deposit Amount</h1>
                  <h1 className="amount">{amount}</h1>
                </div>
                <div className="intrest-cont">
                  <h1 className="depositeamount">Tennure</h1>
                  <h1 className="amount">{tenure}</h1>
                </div>
                <div className="intrest-cont">
                  <h1 className="depositeamount">Intrest Rate</h1>
                  <h1 className="amount">{intrest}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="complete-reshedule-cont">
          <div className="Complete">{b1}</div>
          <div className="Reshedule">{b2}</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
