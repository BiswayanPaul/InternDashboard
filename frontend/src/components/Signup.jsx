import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/intern/add', { name });
            alert('Intern added with default password: 12345678');
            navigate('/login');
        } catch (err) {
            alert('Intern already exists or error occurred', err);
        }
    };

    return (
        <form onSubmit={handleSignup} className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-xl mb-4 font-semibold">Signup</h2>
            <input className="w-full mb-3 p-2 border" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <button className="bg-green-600 text-white px-4 py-2 rounded">Signup</button>
        </form>
    );
}
