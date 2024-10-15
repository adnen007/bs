import { PieChart, Pie, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";

const data = [
  { name: "paid clients", value: 160 },
  { name: "unpaind clients", value: 40 },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart width={400}>
        <Pie data={data} dataKey="value" nameKey="name" fill="#8884d8" label labelLine>
          <Cell fill="#08a957" />
          <Cell fill="#ee222b" />
        </Pie>
        <Tooltip />
        <Legend height={40} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Chart;
