import "./Timeline.css";

let Timeline = () => {
  return (
    <div className=" timeline-con container">
      <div className="header">FD Maturity Timeline</div>
      <div className="timeline">
        <div className="timeline-header">
          <div>2024</div>
          <div>2025</div>
          <div>2026</div>
        </div>
        <div className="timeline-header">
          <div>J F M A M J J A S O N D</div>
          <div>J F M A M J J A S O N D</div>
          <div>J F M A M J J A S O N D</div>
        </div>
        <div className="timeline-item">
          <div className="bar" style={{ width: "120px", marginLeft: "0px" }}>
            Utkarsh FD 1
          </div>
        </div>
        <div className="timeline-item">
          <div className="bar" style={{ width: "200px", marginLeft: "20px" }}>
            Shriram FD Plan 2
          </div>
        </div>
        <div className="timeline-item">
          <div className="bar" style={{ width: "220px", marginLeft: "40px" }}>
            Bajaj Finserv FD 1
          </div>
        </div>
        <div className="timeline-item">
          <div className="bar" style={{ width: "360px", marginLeft: "160px" }}>
            Mahindra FD Plan 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
