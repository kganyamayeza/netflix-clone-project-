# Netflix Clone - Full Stack

A full-stack Netflix clone project built to showcase web development skills with both frontend and backend technologies.

## Description

This is a full-stack Netflix clone featuring a responsive frontend with a Python Flask backend. The app demonstrates modern web development with API integration, server-side logic, and dynamic content delivery. It fetches real movie data from the YTS API through a secure backend.

## Features

- Responsive navbar with navigation links
- Hero section with call-to-action
- Movie rows displaying trending and top-rated content
- Hover effects on movie posters
- Python Flask backend with RESTful API endpoints
- Middleware API to external YTS service
- Error handling and fallback data

## Technologies Used

### Frontend
- HTML5
- CSS3 (with Flexbox and media queries)
- Vanilla JavaScript (ES6+ with Fetch API)

### Backend
- Python 3
- Flask (web framework)
- Requests library (HTTP client)
- RESTful API design

## Setup

### Requirements
- Python 3.7+
- Flask: `pip install flask`
- Requests: `pip install requests`

### Installation

1. Clone or download the project files.
2. Install dependencies: `pip install flask requests`
3. Run the Flask server: `python app.py`
4. The server will start at `http://localhost:5000`
5. Open your browser and go to `http://localhost:5000`

## Project Structure

```
/
├── app.py                # Python Flask backend server
├── index.html            # Main HTML file
├── css/
│   └── styles.css        # Stylesheet
└── js/
    └── script.js         # JavaScript frontend logic
```

## API Endpoints

- `GET /` - Serve main page
- `GET /api/movies` - Get all movies (limit: 20)
- `GET /api/trending` - Get trending movies
- `GET /api/top-rated` - Get top-rated movies

Made by kganya(phila)Mayeza
