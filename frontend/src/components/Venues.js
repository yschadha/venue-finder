import React, { useEffect, useState } from 'react';
import { getAllVenues } from '../services/storage';
import { formatLocation } from '../services/data';
import './venues.css';

const Venues = () => {
    const [venues, setVenues] = useState([]);
    const [filters, setFilters] = useState({
        price: 'all',
        location: 'all'
    });

    useEffect(() => {
        const allVenues = getAllVenues();
        setVenues(filterVenues(allVenues, filters));
    }, [filters]);

    const filterVenues = (venues, filters) => {
        return venues.filter(venue => {
            if (filters.price !== 'all') {
                const [min, max] = filters.price.split('-').map(Number);
                if (max && (venue.price < min || venue.price > max)) return false;
                if (!max && venue.price < min) return false;
            }
            
            if (filters.location !== 'all' && venue.location !== filters.location) {
                return false;
            }
            
            return true;
        });
    };

    return (
        <div className="venues-container">
            <div className="filters">
                <select 
                    value={filters.price}
                    onChange={(e) => setFilters({...filters, price: e.target.value})}
                >
                    <option value="all">All Prices</option>
                    <option value="0-100">$0-$100</option>
                    <option value="101-200">$101-$200</option>
                    <option value="200">$200+</option>
                </select>
                <select
                    value={filters.location}
                    onChange={(e) => setFilters({...filters, location: e.target.value})}
                >
                    <option value="all">All Locations</option>
                    <option value="on-campus">On Campus</option>
                    <option value="off-campus">Off Campus</option>
                    <option value="downtown">Downtown</option>
                    <option value="suburbs">Suburbs</option>
                </select>
            </div>
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

export default Venues;