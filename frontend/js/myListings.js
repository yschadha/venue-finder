import { getUserListings } from './storage.js';
import { renderVenues } from './renderer.js';

// Load user's listings
function loadMyListings() {
    const myListingsContainer = document.getElementById('my-listings');
    if (!myListingsContainer) return;
    
    // Get user's listings from storage
    const userListings = getUserListings();
    
    // Render the user's venues with delete button
    if (userListings.length === 0) {
        myListingsContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-folder-open"></i>
                <p>You haven't created any listings yet.</p>
                <p>Go to the Create tab to add your first venue!</p>
            </div>
        `;
    } else {
        renderVenues(userListings, myListingsContainer, true);
    }
}

export { loadMyListings };