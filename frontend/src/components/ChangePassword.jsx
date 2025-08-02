import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../hook/useAuth';
import { API_BASE_URL } from '../utils/api';


export default function ChangePassword() {
    const { user } = useAuth();
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');

    const handleChange = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_BASE_URL}/api/intern/change-password`, {
                name: user.name,
                oldPassword: oldPass,
                newPassword: newPass
            });
            alert('Password updated!');
            setOldPass('');
            setNewPass('');
        } catch (err) {
            alert('Wrong old password or error!', err);
        }
    };

    return (
        <form onSubmit={handleChange} className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-xl mb-4 font-semibold">Change Password</h2>
            <input className="w-full mb-3 p-2 border" value={oldPass} onChange={(e) => setOldPass(e.target.value)} placeholder="Old Password" type="password" />
            <input className="w-full mb-3 p-2 border" value={newPass} onChange={(e) => setNewPass(e.target.value)} placeholder="New Password" type="password" />
            <button className="bg-purple-500 text-white px-4 py-2 rounded">Update</button>
        </form>
    );
}
