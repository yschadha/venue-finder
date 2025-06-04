// Sample venue data for initial display
const sampleVenues = [
    {
        id: 'sample1',
        title: 'Campus Center Hall',
        price: 150,
        location: 'on-campus',
        description: 'Large hall perfect for formal events and club gatherings. Includes basic sound system and seating for up to 100 people.',
        image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        timestamp: Date.now() - 86400000, // 1 day ago
        isUserListing: false
    },
    {
        id: 'sample2',
        title: 'Downtown Loft Space',
        price: 200,
        location: 'downtown',
        description: 'Modern loft with industrial aesthetic. Great for photography, small parties, or creative events. Capacity of 40 people.',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        timestamp: Date.now() - 172800000, // 2 days ago
        isUserListing: false
    },
    {
        id: 'sample3',
        title: 'Backyard Garden Venue',
        price: 75,
        location: 'suburbs',
        description: 'Charming garden space with string lights and patio. Perfect for intimate gatherings and small celebrations.',
        image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        timestamp: Date.now() - 259200000, // 3 days ago
        isUserListing: false
    },
    {
        id: 'sample4',
        title: 'Student Union Rooftop',
        price: 100,
        location: 'on-campus',
        description: 'Open-air rooftop venue with stunning campus views. Ideal for sunset events and social mixers.',
        image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        timestamp: Date.now() - 345600000, // 4 days ago
        isUserListing: false
    },
    {
        id: 'sample5',
        title: 'Off-Campus Clubhouse',
        price: 120,
        location: 'off-campus',
        description: 'Private clubhouse with pool access, BBQ area, and indoor lounge. Great for day or evening events.',
        image: 'https://images.unsplash.com/photo-1529316738131-4d0c0aea25a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        timestamp: Date.now() - 432000000, // 5 days ago
        isUserListing: false
    }
];

// Format location for display
function formatLocation(locationCode) {
    const locationMap = {
        'on-campus': 'On Campus',
        'off-campus': 'Off Campus',
        'downtown': 'Downtown',
        'suburbs': 'Suburbs'
    };
    
    return locationMap[locationCode] || locationCode;
}

export { sampleVenues, formatLocation };