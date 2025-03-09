import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import bgimg from '../Assets/bgimg.jpg';
function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupInfo({ ...signupInfo, [name]: value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;
        if (!name || !email || !password) {
            return handleError('Name, email, and password are required');
        }
        try {
            const url = `http://localhost:5000/auth/signup`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });
            const result = await response.json();
            if (result.success) {
                handleSuccess(result.message);
                setTimeout(() => navigate('/login'), 1000);
            } else {
                handleError(result.error?.details?.[0]?.message || result.message);
            }
        } catch (err) {
            handleError(err.message);
        }
    };

    return (
        <div className="h-screen w-screen bg-sky-900 flex items-center justify-center relative">   
            <div className="absolute inset-0 bg-cover bg-center opacity-30" ></div>    
            <div className="relative  p-8 rounded-lg  w-full max-w-md" style={{ backgroundImage: `url(${bgimg})` }}>
                <h1 className="text-2xl font-bold text-center text-sky-950 mb-4">Signup</h1>
                <form onSubmit={handleSignup} className="space-y-4">
                    <div className="relative text-black mb-2">
    <label htmlFor="name" className="block font-semibold">Name</label>
    <input
        onChange={handleChange}
        type="text"
        name="name"
        autoFocus
        placeholder="Enter your Name"
        value={signupInfo.name}
        className="bg-transparent mt-2 w-full p-2 border-b-2 border-sky-700 focus:outline-none placeholder:text-black"
    />
</div>

                    <div>
                        <label htmlFor='email' className="block font-semibold">Email</label>
                        <input
                            onChange={handleChange}
                            type='email'
                            name='email'
                            placeholder='Enter your Email'
                            value={signupInfo.email}
                            className="bg-transparent mt-2 w-full p-2 border-b-2 border-sky-700  focus:outline-none placeholder:text-black"
                        />
                    </div>
                    <div>
                        <label htmlFor='password' className="block font-semibold">Password</label>
                        <input
                            onChange={handleChange}
                            type='password'
                            name='password'
                            placeholder='Enter your Password'
                            value={signupInfo.password}
                            className="bg-transparent mt-2 w-full p-2 border-b-2 border-sky-700  focus:outline-none placeholder:text-black"
                        />
                    </div>
                    <button type='submit' className="w-full bg-sky-800 text-white p-2 rounded font-semibold hover:bg-sky-900">
                        Signup
                    </button>
                    <span className="block text-center mt-2 text-sm">
                        Already have an account? <Link to="/login" className="text-sky-950 ">Login🧑‍🚀</Link>
                    </span>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}

export default Signup;
