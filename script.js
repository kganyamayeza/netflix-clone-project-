// Fetch movies from Python backend API
const API_BASE = 'http://localhost:5000/api';

// Function to fetch from backend
async function fetchFromBackend(endpoint) {
    try {
        const response = await fetch(`${API_BASE}${endpoint}`);
        const data = await response.json();
        return data.movies || [];
    } catch (error) {
        console.error('Error fetching from backend:', error);
        return fallbackMovies; // Fallback if API fails
    }
}

// Fallback data with popular shows/movies
const fallbackMovies = [
    { title: 'Stranger Things', medium_cover_image: 'https://image.tmdb.org/t/p/w400/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg' },
    { title: 'The Crown', medium_cover_image: 'https://image.tmdb.org/t/p/w400/1M4qhLdcbZ4o0n2xroo8V6iZG.jpg' },
    { title: 'Breaking Bad', medium_cover_image: 'https://image.tmdb.org/t/p/w400/ggFHVNu6YYI5L9pCfOacjizRGt.jpg' },
    { title: 'The Witcher', medium_cover_image: 'https://image.tmdb.org/t/p/w400/7vjaCdMw15FEbXyLQTVa04URsPm.jpg' },
    { title: 'Money Heist', medium_cover_image: 'https://image.tmdb.org/t/p/w400/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg' },
    { title: 'The Shawshank Redemption', medium_cover_image: 'https://image.tmdb.org/t/p/w400/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg' },
    { title: 'The Godfather', medium_cover_image: 'https://image.tmdb.org/t/p/w400/3bhkrj58Vtu7enYsRolD1fZdja1.jpg' },
    { title: 'Pulp Fiction', medium_cover_image: 'https://image.tmdb.org/t/p/w400/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg' },
    { title: 'Inception', medium_cover_image: 'https://image.tmdb.org/t/p/w400/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg' },
    { title: 'The Dark Knight', medium_cover_image: 'https://image.tmdb.org/t/p/w400/qJ2tW6WMUDux911r6m7haRef0WH.jpg' }
];

// Function to create movie elements
function createMovieElement(movie) {
    const movieDiv = document.createElement('div');
    movieDiv.className = 'movie';
    movieDiv.style.backgroundImage = `url(${movie.medium_cover_image})`;
    movieDiv.title = movie.title;
    return movieDiv;
}

// Function to populate movies in a container
function populateMovies(containerId, movies) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear existing
    movies.forEach(movie => {
        const movieElement = createMovieElement(movie);
        container.appendChild(movieElement);
    });
}

// Populate the movie rows when the page loads
document.addEventListener('DOMContentLoaded', async () => {
    // Fetch from Python backend
    const trendingMovies = await fetchFromBackend('/trending');
    const topRatedMovies = await fetchFromBackend('/top-rated');
    
    // Use fetched data or fallback
    populateMovies('trending-movies', trendingMovies.length > 0 ? trendingMovies : fallbackMovies.slice(0, 5));
    populateMovies('top-rated-movies', topRatedMovies.length > 0 ? topRatedMovies : fallbackMovies.slice(5, 10));
});