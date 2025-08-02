import { useEffect, useState } from 'react';
import { useAuth } from '../hook/useAuth';
import axios from 'axios';
import { API_BASE_URL } from '../utils/api';

export default function Dashboard() {
    const { user } = useAuth();
    const [data, setData] = useState(null);

    useEffect(() => {
        axios
            .get(`${API_BASE_URL}/api/intern/dashboard/${encodeURIComponent(user.name)}`)
            .then(res => setData(res.data))
            .catch(err => console.error(err));
    }, [user.name]);

    if (!data) return <p className="text-center text-gray-500 mt-10">Loading dashboard...</p>;

    const calculateRewards = (amount) => {
        const rewards = [];
        if (amount >= 500) rewards.push("🎁 Bronze Badge");
        if (amount >= 1000) rewards.push("🥈 Silver Badge");
        if (amount >= 2000) rewards.push("🥇 Gold Badge");
        if (amount >= 3000) rewards.push("🏆 Platinum Badge");
        if (amount >= 4000) rewards.push("💎 Diamond Badge");
        if (amount >= 5000) rewards.push("👑 Legend Badge");
        return rewards;
    };

    const achievements = [
        "Shared on social media",
        "First ₹500 raised",
        "Crossed ₹1k",
        "Halfway mark",
        "Top 5 in leaderboard",
        "₹5000+ donated"
    ];
    const unlocked = data.totalRaised >= 5000 ? 6 :
        data.totalRaised >= 2500 ? 5 :
            data.totalRaised >= 1500 ? 4 :
                data.totalRaised >= 1000 ? 3 :
                    data.totalRaised >= 500 ? 2 : 1;

    const rewardList = calculateRewards(data.totalRaised);

    return (
        <div className="max-w-2xl mx-auto mt-10 px-6">
            <div className="rounded-xl shadow-lg bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                    <h2 className="text-3xl font-bold">Welcome, {data.name} 👋</h2>
                    <p className="text-sm mt-1">Here's your performance dashboard.</p>
                </div>

                <div className="p-6 space-y-4">
                    <div className="text-gray-700">
                        <p><span className="font-medium">Referral Code:</span> {data.referralCode}</p>
                        <p><span className="font-medium">Total Donations:</span> ₹{data.totalRaised}</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">🏅 Badges Unlocked</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {rewardList.length > 0 ? rewardList.map((reward, idx) => (
                                <span key={idx} className="inline-block px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full shadow">
                                    {reward}
                                </span>
                            )) : <p className="text-gray-500">No badges yet. Keep going!</p>}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">🎯 Achievements</h3>
                        <ul className="space-y-2 mt-2">
                            {achievements.map((item, idx) => (
                                <li key={idx} className="flex items-center">
                                    <span className={`text-xl mr-2 ${idx < unlocked ? 'text-green-500' : 'text-gray-400'}`}>
                                        {idx < unlocked ? '✅' : '🔒'}
                                    </span>
                                    <span className={`${idx < unlocked ? 'text-gray-800' : 'text-gray-400'}`}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
