import { sampleVenues } from './data';

export const initializeStorage = () => {
    if (!localStorage.getItem('venues')) {
        localStorage.setItem('venues', JSON.stringify(sampleVenues));
    }
    
    if (!localStorage.getItem('userListings')) {
        localStorage.setItem('userListings', JSON.stringify([]));
    }
};

export const getAllVenues = () => {
    const storedVenues = JSON.parse(localStorage.getItem('venues')) || [];
    const userListings = JSON.parse(localStorage.getItem('userListings')) || [];
    return [...storedVenues, ...userListings];
};

export const getUserListings = () => {
    return JSON.parse(localStorage.getItem('userListings')) || [];
};

export const saveUserListing = (venue) => {
    const userListings = getUserListings();
    userListings.push(venue);
    localStorage.setItem('userListings', JSON.stringify(userListings));
};

export const deleteUserListing = (venueId) => {
    const userListings = getUserListings();
    const updatedListings = userListings.filter(venue => venue.id !== venueId);
    localStorage.setItem('userListings', JSON.stringify(updatedListings));
    return updatedListings;
};