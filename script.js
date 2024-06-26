document.addEventListener('DOMContentLoaded', () => {
    // Get references to the search input and button
    const searchInput = document.querySelector('.srch');
    const searchButton = document.querySelector('.btn');

    //Listens for a click event on the element with the class "dropbtn"
    //When a click event occurs, it changes the display style of the element
    //with the class "dropdown-content" to "block", making it vissible
    document.querySelector('.dropbtn').addEventListener('click', function() {
        let dropdownContent = document.querySelector('.dropdown-content');
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = 'block';
        }
      });

    // Event listener for the search button
    searchButton.addEventListener('click', async () => {
        const searchTerm = searchInput.value.trim();

        if (searchTerm) {
            // Call a function to fetch movie data based on the search term
            await fetchMovieData(searchTerm);
        } else {
            // Handle empty search input (show an error message, clear results, etc.)
            console.error('Please enter a movie title.');
        }
    });

    // Function to fetch movie data from TMDB API
    async function fetchMovieData(searchTerm) {
        try {
            const apiKey = '3c26078c39208f92af55a8dfbad1417e'; // Replace with your actual API key
            const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;
            const response = await fetch(apiUrl);
            const data = await response.json();

            // Process the data (e.g., display movie titles, posters, etc.)
            // You can update the .results div in your HTML dynamically here
            const resultsContainer = document.querySelector('.results');
            resultsContainer.innerHTML = ''; // Clear previous results

            data.results.forEach(movie => {
                const movieElement = document.createElement('div');
                movieElement.classList.add('movie-result'); // Add a class for styling

                // Display movie title
                const titleElement = document.createElement('p');
                titleElement.textContent = movie.title;
                movieElement.appendChild(titleElement);

                if (movie.poster_path) {
                    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                    const posterElement = document.createElement('img');
                    posterElement.src = posterUrl;
                    movieElement.appendChild(posterElement);
                } else {
                    // Handle cases where no poster is available
                    const noPosterElement = document.createElement('p');
                    noPosterElement.textContent = 'No poster available';
                    movieElement.appendChild(noPosterElement);
                }

                resultsContainer.appendChild(movieElement);
            });

            console.log(data.results); // Log the results for now
        } catch (error) {
            console.error('Error fetching movie data:', error);

        }
        
    }
    
});
