import { sampleVenues } from './data.js';

// Initialize local storage with sample data if needed
function initializeStorage() {
    if (!localStorage.getItem('venues')) {
        localStorage.setItem('venues', JSON.stringify(sampleVenues));
    }
    
    if (!localStorage.getItem('userListings')) {
        localStorage.setItem('userListings', JSON.stringify([]));
    }
}

// Get all venues (sample + user listings)
function getAllVenues() {
    const storedVenues = JSON.parse(localStorage.getItem('venues')) || [];
    const userListings = JSON.parse(localStorage.getItem('userListings')) || [];
    return [...storedVenues, ...userListings];
}

// Get user's listings from storage
function getUserListings() {
    return JSON.parse(localStorage.getItem('userListings')) || [];
}

// Save a new venue to user listings
function saveUserListing(venue) {
    const userListings = getUserListings();
    userListings.push(venue);
    localStorage.setItem('userListings', JSON.stringify(userListings));
}

// Delete a venue listing
function deleteUserListing(venueId) {
    const userListings = getUserListings();
    const updatedListings = userListings.filter(venue => venue.id !== venueId);
    localStorage.setItem('userListings', JSON.stringify(updatedListings));
    return updatedListings;
}

export { 
    initializeStorage, 
    getAllVenues, 
    getUserListings, 
    saveUserListing, 
    deleteUserListing 
};