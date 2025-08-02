import { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../utils/api';


export default function AddInternForm() {
    const [formData, setFormData] = useState({
        name: '',
        referralCode: '',
        totalRaised: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const generateReferralCode = (name) => {
        return name.toLowerCase().replace(/\s+/g, '') + '2025';
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const { name, referralCode, totalRaised } = formData;
            const finalReferralCode = referralCode.trim() !== '' ? referralCode : generateReferralCode(name);

            await axios.post(`${API_BASE_URL}/api/intern/add`, {
                name,
                referralCode: finalReferralCode,
                totalRaised: Number(totalRaised)
            });

            alert('Intern added successfully!');
            setFormData({ name: '', referralCode: '', totalRaised: '' });
        } catch (err) {
            alert('Error adding intern');
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleAdd} className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-xl mb-4 font-semibold">Add Intern</h2>
            <input
                className="w-full mb-3 p-2 border"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Intern Name"
                required
            />
            <input
                className="w-full mb-3 p-2 border"
                name="referralCode"
                value={formData.referralCode}
                onChange={handleChange}
                placeholder="Referral Code (optional)"
            />
            <input
                className="w-full mb-3 p-2 border"
                name="totalRaised"
                value={formData.totalRaised}
                onChange={handleChange}
                placeholder="Total Raised (₹)"
                type="number"
                required
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
        </form>
    );
}
