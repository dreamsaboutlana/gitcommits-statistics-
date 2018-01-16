import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

export const Graph = props => (
  <BarChart width={850} height={350} data={props.data} barCategoryGap='5%'>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis dataKey="commits" />
    <Tooltip />
    <Legend />
    <Bar dataKey="commits" fill="#33a133" />
  </BarChart>
);
