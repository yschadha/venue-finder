export const sampleVenues = [
    {
        id: 'sample1',
        title: 'Campus Center Hall',
        price: 150,
        location: 'on-campus',
        description: 'Large hall perfect for formal events and club gatherings. Includes basic sound system and seating for up to 100 people.',
        image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        timestamp: Date.now() - 86400000,
        isUserListing: false
    },
    // ...other sample venues...
];

export const formatLocation = (locationCode) => {
    const locationMap = {
        'on-campus': 'On Campus',
        'off-campus': 'Off Campus',
        'downtown': 'Downtown',
        'suburbs': 'Suburbs'
    };
    
    return locationMap[locationCode] || locationCode;
};