import { sampleVenues } from './data.js';


function initializeStorage() {
    if (!localStorage.getItem('venues')) {
        localStorage.setItem('venues', JSON.stringify(sampleVenues));
    }
    
    if (!localStorage.getItem('userListings')) {
        localStorage.setItem('userListings', JSON.stringify([]));
    }
}


function getAllVenues() {
    const storedVenues = JSON.parse(localStorage.getItem('venues')) || [];
    const userListings = JSON.parse(localStorage.getItem('userListings')) || [];
    return [...storedVenues, ...userListings];
}


function getUserListings() {
    return JSON.parse(localStorage.getItem('userListings')) || [];
}


function saveUserListing(venue) {
    const userListings = getUserListings();
    userListings.push(venue);
    localStorage.setItem('userListings', JSON.stringify(userListings));
}


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