import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
// const data = [
//   { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
//   { name: "Page B", uv: 300, pv: 4567, amt: 3000 },
//   { name: "Page C", uv: 500, pv: 1398, amt: 2210 },
//   { name: "Page D", uv: 200, pv: 9800, amt: 2290 },
//   { name: "Page E", uv: 278, pv: 3908, amt: 2000 },
//   { name: "Page F", uv: 189, pv: 4800, amt: 2181 },
//   { name: "Page G", uv: 239, pv: 3800, amt: 2500 },
// ];

const data = [
  { name: "2020", income: 30000, out: 2400 },
  { name: "2021", income: 20000, out: 4567 },
  { name: "2022", income: 35000, out: 1398 },
  { name: "2023", income: 27000, out: 9800 },
  { name: "2024", income: 18000, out: 3908 },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart height={400} width={400} data={data}>
        <Bar dataKey="income" fill="#1e2834ed" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis tick={{ fontSize: 14 }} dataKey="income" />
        <Legend
          height={40}
          payload={[{ value: "Income In Dinnar Per Year", type: "line", id: "ID01" }]}
        />
        <Tooltip />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
