document.addEventListener('DOMContentLoaded', () => {
  const movieDivision = document.querySelector('.movie-division');
  const imagePath = 'Assets/';  

  axios.get('http://localhost/cinema-booking-backend/Controllers/get_movies.php')
    .then(response => {
      const movies = response.data;
      movieDivision.innerHTML = ''; 

      movies.forEach(movie => {
        const img = document.createElement('img');
        img.className = 'movie-image';
        img.src = imagePath + movie.poster_url;
        img.alt = movie.title;
        movieDivision.appendChild(img);
        img.addEventListener('click', () => {
        window.location.href = `Pages/add_movies.html?title=${encodeURIComponent(movie.title)}`;
        });
      });
    })
    .catch(err => console.error('Error loading movies:', err));
});