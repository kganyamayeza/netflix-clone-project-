from flask import Flask, render_template, jsonify
import requests

app = Flask(__name__, static_folder='', static_url_path='', template_folder='')

# YTS API endpoint
YTS_API = 'https://yts.mx/api/v2/list_movies.json'

@app.route('/')
def index():
    """Serve the main HTML file"""
    return app.send_static_file('index.html')

@app.route('/api/movies', methods=['GET'])
def get_movies():
    """Fetch movies from YTS API and return as JSON"""
    try:
        response = requests.get(YTS_API, params={'limit': 20})
        data = response.json()
        movies = data.get('data', {}).get('movies', [])
        
        # Format movies for our frontend
        formatted_movies = [
            {
                'title': movie.get('title'),
                'medium_cover_image': movie.get('medium_cover_image'),
                'year': movie.get('year'),
                'rating': movie.get('rating')
            }
            for movie in movies
        ]
        
        return jsonify({
            'success': True,
            'movies': formatted_movies
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@app.route('/api/trending', methods=['GET'])
def get_trending():
    """Get trending movies"""
    try:
        response = requests.get(YTS_API, params={'limit': 10, 'sort_by': 'date_added'})
        data = response.json()
        movies = data.get('data', {}).get('movies', [])
        return jsonify({'success': True, 'movies': movies})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/top-rated', methods=['GET'])
def get_top_rated():
    """Get top rated movies"""
    try:
        response = requests.get(YTS_API, params={'limit': 10, 'sort_by': 'rating'})
        data = response.json()
        movies = data.get('data', {}).get('movies', [])
        return jsonify({'success': True, 'movies': movies})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
