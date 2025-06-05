import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link 
                    to="/venues" 
                    className={location.pathname === '/venues' ? 'active' : ''}
                >
                    <i className="fas fa-search"></i>
                    Find Venues
                </Link>
                {token ? (
                    <>
                        <Link 
                            to="/create" 
                            className={location.pathname === '/create' ? 'active' : ''}
                        >
                            <i className="fas fa-plus"></i>
                            Create Listing
                        </Link>
                        <Link 
                            to="/my-listings" 
                            className={location.pathname === '/my-listings' ? 'active' : ''}
                        >
                            <i className="fas fa-list"></i>
                            My Listings
                        </Link>
                        <Link 
                            to="/recent" 
                            className={location.pathname === '/recent' ? 'active' : ''}
                        >
                            <i className="fas fa-clock"></i>
                            Recent
                        </Link>
                        <button onClick={handleLogout} className="logout-btn">
                            <i className="fas fa-sign-out-alt"></i>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Sign Up</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navigation;