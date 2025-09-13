import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
// import Data from './Pages/Data';
// import Home from './Pages/Home';
// import Credential from './Pages/Credential'
import { useState } from 'react';
// import RefrshHandler from './RefreshHandler';

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const PrivateRoute = ({ element }) => {
  //   return isAuthenticated ? element : <Navigate to="/login" />
  // }

  return (
    <div className="App">
      {/* <RefrshHandler setIsAuthenticated={setIsAuthenticated} /> */}
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        {/* <Route path='/home' element={<PrivateRoute element={<Home />} />} /> */}
        {/* <Route path='/home' element={<Home />}  />
        <Route path='/data' element={<Data />} />
        <Route path='/addCredentials' element={<Credential />} /> */}
      </Routes>
    </div>
  );
}

export default App;