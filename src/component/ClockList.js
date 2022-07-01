import Clock from "./Clock";

function ClockList({ quantities = [] }) {
  console.log(quantities);
  return quantities.map((i) => <Clock key={i} />);
}

export default ClockList;
