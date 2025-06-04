import { initializeStorage } from './storage.js';
import { setupNavigation, loadTab } from './navigation.js';
import { setupFilterControls } from './venues.js';
import { setupCreateForm } from './createListing.js';

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the app
    initApp();
});

// Main app initialization function
function initApp() {
    // Initialize local storage if it's the first visit
    initializeStorage();
    
    // Set up navigation
    setupNavigation();
    
    // Load the default tab (filter)
    loadTab('filter');
    
    // Set up event listeners for the filter controls
    setupFilterControls();
    
    // Set up the create listing form
    setupCreateForm();
}