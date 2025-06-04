import { getAllVenues } from './storage.js';
import { renderVenues } from './renderer.js';

// Set up filter controls
function setupFilterControls() {
    document.addEventListener('click', function(event) {
        if (event.target && event.target.id === 'apply-filters') {
            loadVenueListings();
        }
    });
}

// Load all venue listings with optional filtering
function loadVenueListings() {
    const listingsContainer = document.getElementById('listings-container');
    if (!listingsContainer) return;
    
    // Get filter values if they exist
    const priceRangeSelect = document.getElementById('price-range');
    const locationSelect = document.getElementById('location');
    
    const priceRange = priceRangeSelect ? priceRangeSelect.value : 'all';
    const location = locationSelect ? locationSelect.value : 'all';
    
    // Get all venues from storage
    const venues = getAllVenues();
    
    // Apply filters
    const filteredVenues = venues.filter(venue => {
        // Filter by price range
        if (priceRange !== 'all') {
            const [min, max] = priceRange.split('-').map(Number);
            if (max) {
                if (venue.price < min || venue.price > max) return false;
            } else {
                // Handle 200+ case
                if (venue.price < min) return false;
            }
        }
        
        // Filter by location
        if (location !== 'all' && venue.location !== location) return false;
        
        return true;
    });
    
    // Render the filtered venues
    renderVenues(filteredVenues, listingsContainer);
}

export { setupFilterControls, loadVenueListings };