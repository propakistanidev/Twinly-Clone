import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

export default function FancyBarChart() {
    const [data, setData] = useState([60, 90, 45, 70, 100, 80, 30]);
    const [highlightedIndex, setHighlightedIndex] = useState(0);

    // Animate data and switch highlighted bar every 3s
    useEffect(() => {
        const interval = setInterval(() => {
            setData(data.map(() => Math.floor(Math.random() * 60) + 40));
            setHighlightedIndex((prev) => (prev + 1) % data.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [data.length]);

    return (
        <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-3xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-[#0F5265]">Monthly Performance</h2>
                <button className="flex items-center gap-1 text-sm text-[#0F5265] font-medium hover:underline">
                    Filter <Icon icon="mdi:chevron-down" className="text-base" />
                </button>
            </div>

            {/* Y-axis labels */}
            <div className="flex">
                <div className="flex flex-col justify-between mr-2 text-sm text-gray-400 h-[200px]">
                    {[100, 80, 60, 40, 20, 0].map((val) => (
                        <span key={val} className="h-[33px]">{val}</span>
                    ))}
                </div>

                {/* Bars and X-axis */}
                <div className="flex-1 flex flex-col justify-between">
                    <div className="flex items-end gap-4 h-[200px]">
                        {data.map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0, backgroundColor: '#F5D794' }}
                                animate={{
                                    height: `${value * 2}px`,
                                    backgroundColor: i === highlightedIndex ? '#E1FDFD' : '#F5D794',
                                }}
                                transition={{ duration: 0.8, delay: i * 0.2 }}
                                className="w-8 rounded-t gap-4"
                            />
                        ))}
                    </div>

                    {/* X-axis labels */}
                    <div className="flex gap-4 mt-2 text-sm text-gray-500 justify-between px-1">
                        {labels.map((label, i) => (
                            <span key={i} className="w-8 text-center">{label}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}