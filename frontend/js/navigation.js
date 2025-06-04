import { loadVenueListings } from './venues.js';
import { loadRecentListings } from './recent.js';
import { loadMyListings } from './myListings.js';

// Set up the bottom navigation
function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Load the corresponding tab
            const tabName = button.getAttribute('data-tab');
            loadTab(tabName);
        });
    });
}

// Load a specific tab content
function loadTab(tabName) {
    const contentContainer = document.getElementById('content');
    const templateId = `${tabName}-template`;
    const template = document.getElementById(templateId);
    
    if (template) {
        contentContainer.innerHTML = '';
        contentContainer.appendChild(template.content.cloneNode(true));
        
        // Initialize tab-specific content
        switch (tabName) {
            case 'filter':
                loadVenueListings();
                break;
            case 'recent':
                loadRecentListings();
                break;
            case 'my-listings':
                loadMyListings();
                break;
            case 'create':
                // The create form is already set up in setupCreateForm()
                break;
        }
    }
}

export { setupNavigation, loadTab };