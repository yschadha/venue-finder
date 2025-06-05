import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { initializeStorage } from './services/storage';
import Navigation from './components/Navigation';
import Venues from './components/Venues';
import CreateListing from './components/CreateListing';
import MyListings from './components/MyListings';
import Recent from './components/Recent';
import Login from './components/Login';
import Register from './components/Register';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to="/login" />;
};

function App() {
    useEffect(() => {
        initializeStorage();
    }, []);

    return (
        <Router>
            <div className="App">
                <Navigation />
                <Routes>
                    <Route path="/venues" element={<Venues />} />
                    <Route path="/create" element={
                        <PrivateRoute>
                            <CreateListing />
                        </PrivateRoute>
                    } />
                    <Route path="/my-listings" element={
                        <PrivateRoute>
                            <MyListings />
                        </PrivateRoute>
                    } />
                    <Route path="/recent" element={<Recent />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Navigate to="/venues" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;