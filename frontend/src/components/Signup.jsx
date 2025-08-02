import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../utils/api';

export default function Signup() {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        const referralCode = `${name.toLowerCase().replace(/\s+/g, '')}2025`;

        try {
            await axios.post(`${API_BASE_URL}/api/intern/add`, {
                name,
                referralCode,
                totalRaised: 0
            });
            alert('Intern added with default password: 12345678');
            navigate('/login');
        } catch (err) {
            alert('Intern already exists or error occurred');
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSignup} className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-xl mb-4 font-semibold">Signup</h2>
            <input
                className="w-full mb-3 p-2 border"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded">Signup</button>
        </form>
    );
}
