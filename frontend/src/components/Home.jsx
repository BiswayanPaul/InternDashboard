import { Link } from 'react-router-dom';
import { FiTrendingUp, FiUserPlus, FiHome } from 'react-icons/fi';

export default function Home() {
    return (
        <div className="w-full h-[90%] flex-1 flex items-center justify-center bg-gradient-to-br from-indigo-200 via-white to-purple-200">
            <div className="flex flex-col justify-center items-center text-center h-[70%] bg-white/80 backdrop-blur-lg border border-gray-300 rounded-3xl shadow-xl p-8 sm:p-10 max-w-3xl w-[90%]">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-800 mb-4 leading-tight drop-shadow-md">
                    Welcome to <span className="text-purple-700">InternTaskR1</span> 🚀
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-md">
                    Manage interns, view leaderboards, and track donations — all in one place.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 w-full sm:w-auto">
                    <Link
                        to="/dashboard"
                        className="flex items-center justify-center gap-2 px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-md hover:shadow-lg transition duration-300"
                    >
                        <FiHome className="text-lg" /> Dashboard
                    </Link>
                    <Link
                        to="/leaderboard"
                        className="flex items-center justify-center gap-2 px-6 py-3 text-white bg-green-600 hover:bg-green-700 rounded-full shadow-md hover:shadow-lg transition duration-300"
                    >
                        <FiTrendingUp className="text-lg" /> Leaderboard
                    </Link>
                    <Link
                        to="/add-intern"
                        className="flex items-center justify-center gap-2 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-md hover:shadow-lg transition duration-300"
                    >
                        <FiUserPlus className="text-lg" /> Add Intern
                    </Link>
                </div>
            </div>
        </div>
    );
}
