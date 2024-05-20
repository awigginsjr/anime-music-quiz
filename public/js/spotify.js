const clientID = '66fe6133fda54d3aa9b93bd5d3b1f556';
const clientSecret = '826a89619b6b4741aac6dec6297ebbf2';

// Base64 encode clientID:clientSecret
const basicToken = btoa(`${clientID}:${clientSecret}`);

let accessToken = '';

async function getToken() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${basicToken}`
        },
        body: 'grant_type=client_credentials'
    });

    const data = await response.json();
    accessToken = data.access_token;
}

async function search() {
    if (!accessToken) {
        await getToken();
    }

    const searchInput = document.getElementById('searchInput').value.trim();
    if (!searchInput) {
        console.error('Please enter a search query');
        return;
    }

    const apiUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchInput)}&type=track&limit=1`;

    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (response.ok) {
            const data = await response.json();
            displayResults(data.tracks.items);
        } else {
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function playTrack(trackId) {
    var iframe = document.getElementById('spotifyPlayer');
    iframe.src = "https://open.spotify.com/embed/track/" + trackId;
}

function displayResults(tracks) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (tracks.length === 0) {
        resultsContainer.innerHTML = '<p>No results found</p>';
        return;
    }

    const track = tracks[0];
    const trackInfo = `${track.name} - ${track.artists[0].name}`;
    const trackLink = document.createElement('a');
    trackLink.href = "#";
    trackLink.textContent = trackInfo;
    trackLink.onclick = () => {
        playTrack(track.id);
        return false;
    };

    resultsContainer.appendChild(trackLink);
}

// Ensure the search button triggers the search function
document.getElementById('searchButton').onclick = search;
