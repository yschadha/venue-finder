import { formatLocation } from './data.js';
import { deleteUserListing } from './storage.js';
import { loadMyListings } from './myListings.js';

// Render venue cards in a container
function renderVenues(venues, container, isMyListings = false) {
    if (!container) return;
    
    if (venues.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <p>No venues found matching your criteria.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    
    venues.forEach(venue => {
        const venueCard = document.createElement('div');
        venueCard.className = 'venue-card';
        venueCard.dataset.id = venue.id;
        
        const date = new Date(venue.timestamp);
        const formattedDate = `${date.toLocaleDateString()} at ${date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
        
        venueCard.innerHTML = `
            <img src="${venue.image}" alt="${venue.title}" class="venue-image">
            <div class="venue-info">
                <h3 class="venue-title">${venue.title}</h3>
                <p class="venue-price">$${venue.price}</p>
                <p class="venue-location"><i class="fas fa-map-marker-alt"></i> ${formatLocation(venue.location)}</p>
                <p class="venue-description">${venue.description}</p>
                <p class="venue-timestamp"><small>Posted: ${formattedDate}</small></p>
                ${isMyListings ? `<button class="delete-btn" data-id="${venue.id}"><i class="fas fa-trash"></i> Delete Listing</button>` : ''}
            </div>
        `;
        
        container.appendChild(venueCard);
    });
    
    // Add event listeners for delete buttons if on My Listings tab
    if (isMyListings) {
        const deleteButtons = container.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const venueId = button.getAttribute('data-id');
                deleteVenue(venueId);
            });
        });
    }
}

// Handle venue deletion
function deleteVenue(venueId) {
    if (confirm('Are you sure you want to delete this listing?')) {
        deleteUserListing(venueId);
        
        // Reload the My Listings tab
        loadMyListings();
    }
}

export { renderVenues };