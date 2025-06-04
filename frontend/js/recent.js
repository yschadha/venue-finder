import { getAllVenues } from './storage.js';
import { renderVenues } from './renderer.js';

// Load recent listings
function loadRecentListings() {
    const recentListingsContainer = document.getElementById('recent-listings');
    if (!recentListingsContainer) return;
    
    // Get all venues and sort by timestamp (newest first)
    const venues = getAllVenues();
    const recentVenues = [...venues].sort((a, b) => b.timestamp - a.timestamp).slice(0, 10);
    
    // Render the recent venues
    renderVenues(recentVenues, recentListingsContainer);
}

export { loadRecentListings };