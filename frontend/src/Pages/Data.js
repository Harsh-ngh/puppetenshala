import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
// import axios from 'axios';

function Data() {
    const navigate = useNavigate();
    const [hiringReason, setHiringReason] = useState('');

    const handleHiringReasonChange = (e) => {
        setHiringReason(e.target.value);
    };

    // const saveData = async () => {
    //     try {
    //         await axios.post('http://localhost:5000/api/data', { hiringReason });
    //         alert('Data saved successfully');
    //     } catch (error) {
    //         console.error('Error saving data:', error);
    //     }
    // };

    return (
        <div className="min-h-screen flex flex-col justify-between bg-sky-900 text-white p-4">
            {/* Header Section */}
            <div className="flex justify-between w-full px-6 py-4">
                <h1 className="text-3xl font-bold">Your Credentials</h1>
                <button 
                    onClick={() => alert('Ally button clicked')} 
                    className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow-md">
                    Aplly
                </button>
            </div>
            
            {/* Credentials Section */}
            <div className="w-full max-w-4xl mx-auto bg-white text-black p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Enter Your Hiring Reason</h2>
                <textarea 
                    value={hiringReason}
                    onChange={handleHiringReasonChange}
                    placeholder="Enter your hiring reason..."
                    className="w-full h-32 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                />
                <button 
                    // onClick={saveData} 
                    className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md">
                    Save
                </button>
            </div>

            <Footer />
        </div>
    );
}

export default Data;