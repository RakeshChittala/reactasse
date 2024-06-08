import "./Fdprofile.css";
import {
  PieChart,
  Pie,
  Legend,
  Cell,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const data = [
  {
    count: 40000,
    perc: "40000 (40%)",
    language: "Bajaj Finance",
  },
  {
    count: 25000,
    perc: "25000 (25%)",
    language: "Sri Ram Finance",
  },
  {
    count: 20000,
    perc: "20000 (20%)",
    language: "Utkash Finance",
  },
  {
    count: 15000,
    perc: "15000 (15%)",
    language: "Mahindra Finance",
  },
];

const COLORS = ["#59CBD3", "#6C63FF", "#FA9D17", "#B9C606"];

const renderLegend = (props) => {
  const { payload } = props;
  return (
    <div className="custom-legend">
      {payload.map((entry, index) => (
        <div key={`item-${index}`} className="legend-item">
          <span
            className="legend-color"
            style={{ backgroundColor: COLORS[index % COLORS.length] }}
          />
          <span className="legend-text">{entry.payload.language}</span>
        </div>
      ))}
    </div>
  );
};

const Fdprofile = () => {
  return (
    <div className="fdprofile-con">
      <div className="P-d-cont">
        <h1 className="your-profile-heading">Your Fd Protofoile</h1>
        <select className="select">
          <option>Deposit Amt</option>
        </select>
      </div>
      <div className="profile-con">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              startAngle={0}
              endAngle={360}
              innerRadius="0%"
              outerRadius="80%"
              dataKey="count"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${entry.perc}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              <LabelList dataKey="perc" position="inside" />
            </Pie>
            <Legend
              iconType="circle"
              layout="vertical"
              verticalAlign="middle"
              align="right"
              content={renderLegend} // Use custom legend
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Fdprofile;
