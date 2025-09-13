// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { handleSuccess } from '../utils';
// import { ToastContainer } from 'react-toastify';
// import inputbg from '../Assets/inputbg.avif';
// import Footer from './Footer';

// function Home() {
//     const [loggedInUser, setLoggedInUser] = useState('');
//     const [userPrompt, setUserPrompt] = useState(localStorage.getItem('userPrompt') || '');
//     const navigate = useNavigate();

//     useEffect(() => {
//         setLoggedInUser(localStorage.getItem('loggedInUser'));
//     }, []);

//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         localStorage.removeItem('loggedInUser');
//         handleSuccess('User Logged out');
//         setTimeout(() => {
//             navigate('/login');
//         }, 1000);
//     };

//     const handlePromptChange = (e) => {
//         setUserPrompt(e.target.value);
//     };

//     const savePrompt = async () => {
//         localStorage.setItem('userPrompt', userPrompt);
//         try {
//             const response = await fetch('http://localhost:5000/message/addMessage', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ prompt: userPrompt })
//             });
//             if (response.ok) handleSuccess('Prompt saved successfully');
//         } catch (error) {
//             console.error('Error saving prompt:', error);
//         }
//     };

//     const updatePrompt = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/message/updateMessage', {
//                 method: 'PUT',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ prompt: userPrompt })
//             });
//             if (response.ok) handleSuccess('Prompt updated successfully');
//         } catch (error) {
//             console.error('Error updating prompt:', error);
//         }
//     };

//     const deletePrompt = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/message/deleteMessage', { method: 'DELETE' });
//             if (response.ok) {
//                 setUserPrompt('');
//                 localStorage.removeItem('userPrompt');
//                 handleSuccess('Prompt deleted successfully');
//             }
//         } catch (error) {
//             console.error('Error deleting prompt:', error);
//         }
//     };

//     return (
//         <div className="min-h-screen flex flex-col justify-between bg-sky-900 text-white p-4">
//             {/* Header Section */}
//             <div className="flex justify-between w-full px-6 py-4">
//                 <h1 className="text-4xl font-bold">Welcome to PuppeternShala, {loggedInUser}</h1>
//                 <button 
//                     onClick={handleLogout} 
//                     className="px-6 py-2 bg-sky-800 hover:bg-sky-900 text-white rounded-lg shadow-md transition-all">
//                     Logout
//                 </button>
//             </div>

//             {/* Content Section */}
//             <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto mt-8 flex-grow">
//                 <p className="text-lg max-w-md text-left font-semibold">
//                     "Automate your internship applications effortlessly with Puppettenshala. Enter your prompt once and let us handle the application process at Internshala with just a single click! Save time, focus on growth!"
//                 </p>
                
//                 {/* Background Image Section with Transparent Input Box */}
//                 <div className="relative w-full md:w-1/2 h-96 bg-cover bg-center rounded-lg shadow-lg overflow-hidden mt-6 md:mt-0" style={{ backgroundImage: `url(${inputbg})`}}>
//                     <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4">
//                         <textarea 
//                             value={userPrompt}
//                             onChange={handlePromptChange}
//                             placeholder="Enter your prompt..." 
//                             className="w-3/4 h-40 px-4 py-2 text-lg bg-transparent border-2 border-white text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 resize-none"
//                         />
//                         <div className="mt-3 flex space-x-3">
//                             <button 
//                                 onClick={savePrompt} 
//                                 className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow-md transition-all">
//                                 Save
//                             </button>
//                             <button 
//                                 onClick={updatePrompt} 
//                                 className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition-all">
//                                 Update
//                             </button>
//                             <button 
//                                 onClick={deletePrompt} 
//                                 className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition-all">
//                                 Delete
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//             {/* Button to Navigate to Data Page */}
//             <div className="flex justify-center mt-8">
//                 <button 
//                     onClick={() => navigate('/addCredentials')} 
//                     className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md transition-all">
//                     Give your other credentials
//                 </button>
//             </div>
            
//             <ToastContainer />
//             <Footer />
//         </div>
//     );
// }

// export default Home;
