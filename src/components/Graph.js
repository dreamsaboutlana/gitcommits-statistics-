import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

export const Graph = props => (
  <BarChart width={800} height={350} data={props.data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis dataKey="commits" />
    <Tooltip />
    <Legend />
    <Bar dataKey="commits" fill="#33a133" />
  </BarChart>
);
