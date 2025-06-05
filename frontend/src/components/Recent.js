import React, { useEffect, useState } from 'react';
import { getAllVenues } from '../services/storage';
import { formatLocation } from '../services/data';
import './Recent.css';

const Recent = () => {
    const [venues, setVenues] = useState([]);

    useEffect(() => {
        const allVenues = getAllVenues();
        const sortedVenues = [...allVenues].sort((a, b) => b.timestamp - a.timestamp).slice(0, 10);
        setVenues(sortedVenues);
    }, []);

    return (
        <div className="venues-container">
            <h2>Recent Listings</h2>
            <div className="venues-grid">
                {venues.map((venue) => (
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recent;