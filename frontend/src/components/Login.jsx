import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';
import axios from 'axios';

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/intern/login', { name, password });
            login(res.data.intern);
            navigate('/dashboard');
        } catch (err) {
            alert('Invalid credentials', err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-xl mb-4 font-semibold">Login</h2>
            <input className="w-full mb-3 p-2 border" value={name} onChange={(e) => setName(e.target.value)} placeholder="Intern Name" />
            <input className="w-full mb-3 p-2 border" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
        </form>
    );
}
