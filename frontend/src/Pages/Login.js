import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import bgimg from '../Assets/bgimg.jpg';

function Login() {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo({ ...loginInfo, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError('Email and password are required');
        }
        try {
            const url = `http://localhost:5000/auth/login`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            if (result.success) {
                handleSuccess(result.message);
                localStorage.setItem('token', result.jwtToken);
                localStorage.setItem('loggedInUser', result.name);
                localStorage.setItem('loggedInUserEmail', result.email);
                localStorage.setItem('loggedInUserPasswowd', result.password);
                setTimeout(() => navigate('/home'), 1000);
            } else {
                handleError(result.error?.details?.[0]?.message || result.message);
            }
        } catch (err) {
            handleError(err.message);
        }
    };

    return (
        <div className="h-screen w-screen bg-sky-900 flex items-center justify-center relative">   
            <div className="absolute inset-0 bg-cover bg-center opacity-30"></div>    
            <div className="relative p-8 rounded-lg w-full max-w-md" style={{ backgroundImage: `url(${bgimg})` }}>
                <h1 className="text-2xl font-bold text-center text-sky-950 mb-4">Login</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="relative text-black mb-2">
                        <label htmlFor="email" className="block font-semibold">Email</label>
                        <input
                            onChange={handleChange}
                            type="email"
                            name="email"
                            placeholder="Enter your Email"
                            value={loginInfo.email}
                            className="bg-transparent mt-2 w-full p-2 border-b-2 border-sky-700 focus:outline-none placeholder:text-black"
                        />
                    </div>
                    <div className="relative text-black mb-2">
                        <label htmlFor="password" className="block font-semibold">Password</label>
                        <input
                            onChange={handleChange}
                            type="password"
                            name="password"
                            placeholder="Enter your Password"
                            value={loginInfo.password}
                            className="bg-transparent mt-2 w-full p-2 border-b-2 border-sky-700 focus:outline-none placeholder:text-black"
                        />
                    </div>
                    <button type="submit" className="w-full bg-sky-800 text-white p-2 rounded font-semibold hover:bg-sky-900">
                        Login
                    </button>
                    <span className="block text-center mt-2 text-sm">
                        Don't have an account? <Link to="/signup" className="text-sky-950">Signup🧑‍🚀</Link>
                    </span>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}

export default Login;
