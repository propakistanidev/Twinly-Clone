// File: LineGraph.jsx
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    { name: 'Jan', Others: 6000, Twinly: 2400 },
    { name: 'Feb', Others: 3000, Twinly: 1398 },
    { name: 'Mar', Others: 2000, Twinly: 9800 },
    { name: 'Apr', Others: 2780, Twinly: 3908 },
    { name: 'May', Others: 1890, Twinly: 4800 },
    { name: 'Jun', Others: 2390, Twinly: 3800 },
    { name: 'Jul', Others: 3490, Twinly: 4300 },
];

export default function LineGraph() {
    return (
        <div className="w-[500px] h-[300px] bg-white p-4 rounded-xl shadow-xl">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">Website Stats</h2>
            <ResponsiveContainer width="100%" height={240}>
                <LineChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis tick={false} axisLine={false} />
                    <Tooltip />
                    <Legend
                        verticalAlign="bottom"
                        align="center"
                        iconType="circle"
                        content={({ payload }) => (
                            <ul className="flex justify-center gap-8 text-[#0F5265] font-medium text-sm mt-4">
                                {[...payload].sort((a, b) => {
                                    if (a.value === 'Twinly') return -1;
                                    if (b.value === 'Twinly') return 1;
                                    return 0;
                                }).map((entry, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <span
                                            className="w-3 h-3 rounded-full inline-block"
                                            style={{ backgroundColor: entry.color }}
                                        />
                                        {entry.value}
                                    </li>
                                ))}
                            </ul>
                        )}
                    />
                    <Line type="monotone" dataKey="Twinly" stroke="#0F5265" strokeWidth={3}
                    />

                    <Line type="monotone" dataKey="Others" stroke="#F5D794" strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}