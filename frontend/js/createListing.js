import { saveUserListing } from './storage.js';
import { loadTab } from './navigation.js';

// Set up the create listing form
function setupCreateForm() {
    document.addEventListener('submit', function(event) {
        if (event.target && event.target.id === 'create-listing-form') {
            event.preventDefault();
            createNewListing();
        }
    });
    
    // Set up image preview
    document.addEventListener('change', function(event) {
        if (event.target && event.target.id === 'venue-image') {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const imagePreview = document.getElementById('image-preview');
                    if (imagePreview) {
                        imagePreview.style.backgroundImage = `url(${e.target.result})`;
                        imagePreview.textContent = '';
                    }
                };
                reader.readAsDataURL(file);
            }
        }
    });
}

// Create a new venue listing
function createNewListing() {
    const titleInput = document.getElementById('venue-title');
    const priceInput = document.getElementById('venue-price');
    const locationInput = document.getElementById('venue-location');
    const descriptionInput = document.getElementById('venue-description');
    const imageInput = document.getElementById('venue-image');
    
    if (!titleInput || !priceInput || !locationInput || !descriptionInput || !imageInput) {
        alert('Form inputs not found. Please try again.');
        return;
    }
    
    if (!imageInput.files || imageInput.files.length === 0) {
        alert('Please select an image for your venue.');
        return;
    }
    
    const file = imageInput.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const newVenue = {
            id: 'user_' + Date.now(),
            title: titleInput.value,
            price: Number(priceInput.value),
            location: locationInput.value,
            description: descriptionInput.value,
            image: e.target.result,
            timestamp: Date.now(),
            isUserListing: true
        };
        
        // Add to user listings in local storage
        saveUserListing(newVenue);
        
        // Reset the form
        document.getElementById('create-listing-form').reset();
        document.getElementById('image-preview').style.backgroundImage = '';
        document.getElementById('image-preview').textContent = 'Image preview will appear here';
        
        // Show success message
        alert('Your venue listing has been created successfully!');
        
        // Navigate to My Listings tab
        const myListingsBtn = document.querySelector('.nav-btn[data-tab="my-listings"]');
        if (myListingsBtn) {
            myListingsBtn.click();
        }
    };
    
    reader.readAsDataURL(file);
}

export { setupCreateForm };