import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveUserListing } from '../services/storage';
import './CreateListing.css';
// create listing functionality
const CreateListing = () => {
    const navigate = useNavigate();
    const [formData, setState] = useState({
        title: '',
        price: '',
        location: '',
        description: '',
        image: null,
        imagePreview: null
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setState(prev => ({
                    ...prev,
                    image: file,
                    imagePreview: e.target.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newVenue = {
            id: 'user_' + Date.now(),
            title: formData.title,
            price: Number(formData.price),
            location: formData.location,
            description: formData.description,
            image: formData.imagePreview,
            timestamp: Date.now(),
            isUserListing: true
        };

        saveUserListing(newVenue);
        navigate('/my-listings');
    };

    return (
        <div className="create-form-container">
            <form id="create-listing-form" onSubmit={handleSubmit}>
                <h2>Create New Venue Listing</h2>
                
                <div className="form-group">
                    <label htmlFor="venue-title">Venue Name</label>
                    <input
                        id="venue-title"
                        type="text"
                        required
                        value={formData.title}
                        onChange={(e) => setState({...formData, title: e.target.value})}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="venue-price">Price per Night ($)</label>
                    <input
                        id="venue-price"
                        type="number"
                        required
                        min="0"
                        value={formData.price}
                        onChange={(e) => setState({...formData, price: e.target.value})}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="venue-location">Location</label>
                    <select
                        id="venue-location"
                        required
                        value={formData.location}
                        onChange={(e) => setState({...formData, location: e.target.value})}
                    >
                        <option value="">Select a location</option>
                        <option value="on-campus">On Campus</option>
                        <option value="off-campus">Off Campus</option>
                        <option value="downtown">Downtown</option>
                        <option value="suburbs">Suburbs</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="venue-description">Description</label>
                    <textarea
                        id="venue-description"
                        required
                        value={formData.description}
                        onChange={(e) => setState({...formData, description: e.target.value})}
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="venue-image">Venue Image</label>
                    <input
                        id="venue-image"
                        type="file"
                        accept="image/*"
                        required
                        onChange={handleImageChange}
                    />
                    <div 
                        id="image-preview" 
                        className="image-preview"
                        style={{
                            backgroundImage: formData.imagePreview ? `url(${formData.imagePreview})` : 'none'
                        }}
                    >
                        {!formData.imagePreview && 'Image preview will appear here'}
                    </div>
                </div>

                <button type="submit">Create Listing</button>
            </form>
        </div>
    );
};

export default CreateListing;