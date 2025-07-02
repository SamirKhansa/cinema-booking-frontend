document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const title = params.get('title');
  
  if (!title) {
    document.getElementById('title').textContent = 'Movie title not specified.';
    return;
  }

  axios.get(`http://localhost/cinema-booking-backend/Controllers/get_movie_by_title.php?title=${encodeURIComponent(title)}`)
    .then(response => {
      const movie = response.data;

      document.getElementById('title').textContent = movie.title;
      document.getElementById('movie-poster').src = "../Assets/" + movie.poster_url;
      document.getElementById('movie-description').textContent = movie.description;
      document.getElementById('genre').textContent = movie.genre;
      document.getElementById('director').textContent = movie.director;
      document.getElementById('actors').textContent = movie.actors;
      document.getElementById('duration_minutes').textContent = movie.duration_minutes;
      document.getElementById('release_date').textContent = movie.release_date;
      document.getElementById('rating').textContent = movie.rating;
      document.getElementById('language').textContent = movie.language;
      console.log('Trailer URL:', movie.trailer_url);
      document.getElementById('trailer_url').href = movie.trailer_url;
    })
    .catch(err => {
      console.error('Failed to load movie:', err);
    });
});
