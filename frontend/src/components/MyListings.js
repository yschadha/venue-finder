import React, { useEffect, useState } from 'react';
import { getUserListings, deleteUserListing } from '../services/storage';
import { formatLocation } from '../services/data';
import './MyListings.css';

const MyListings = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        loadMyListings();
    }, []);

    const loadMyListings = () => {
        const userListings = getUserListings();
        setListings(userListings);
    };

    const handleDelete = (venueId) => {
        if (window.confirm('Are you sure you want to delete this listing?')) {
            deleteUserListing(venueId);
            loadMyListings();
        }
    };

    if (listings.length === 0) {
        return (
            <div className="empty-state">
                <i className="fas fa-folder-open"></i>
                <p>You haven't created any listings yet.</p>
                <p>Go to the Create tab to add your first venue!</p>
            </div>
        );
    }

    return (
        <div className="venues-container">
            <div className="venues-grid">
                {listings.map((venue) => (
                    <div key={venue.id} className="venue-card">
                        <img src={venue.image} alt={venue.title} className="venue-image" />
                        <div className="venue-info">
                            <h3>{venue.title}</h3>
                            <p className="venue-price">${venue.price}</p>
                            <p className="venue-location">
                                <i className="fas fa-map-marker-alt"></i> 
                                {formatLocation(venue.location)}
                            </p>
                            <p className="venue-description">{venue.description}</p>
                            <p className="venue-timestamp">
                                <small>Posted: {new Date(venue.timestamp).toLocaleDateString()}</small>
                            </p>
                            <button 
                                className="delete-btn" 
                                onClick={() => handleDelete(venue.id)}
                            >
                                <i className="fas fa-trash"></i> Delete Listing
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyListings;