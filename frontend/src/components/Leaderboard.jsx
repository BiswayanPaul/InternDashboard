import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Leaderboard() {
    const [interns, setInterns] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/intern/all')
            .then(res => {
                const sorted = res.data.sort((a, b) => b.totalRaised - a.totalRaised);
                setInterns(sorted);
            })
            .catch(err => console.error(err));
    }, []);

    const rankColors = ['text-yellow-500', 'text-gray-500', 'text-orange-400'];

    return (
        <div className="max-w-4xl mx-auto mt-10 px-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-4">
                    <h2 className="text-3xl font-bold">🏆 Leaderboard</h2>
                    <p className="text-sm">Top-performing interns based on total donations</p>
                </div>

                <div className="divide-y px-6 py-4">
                    {interns.map((intern, idx) => (
                        <div key={intern._id} className="flex items-center justify-between py-4">
                            <div className="flex items-center gap-4">
                                <div className={`text-2xl font-bold w-8 ${rankColors[idx] || 'text-gray-600'}`}>
                                    {idx + 1}
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                                        {intern.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">{intern.name}</p>
                                        <p className="text-sm text-gray-500">{intern.referralCode}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-lg font-semibold text-green-600">
                                ₹{intern.totalRaised.toLocaleString()} 🪙
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
