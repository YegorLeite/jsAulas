const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmNlYzgyODNmYjFkM2JkNjgyMzFiZTAxMzAxMjIyNCIsIm5iZiI6MTcyNzk2MTkxMS40ODIwMzcsInN1YiI6IjY2MmQ0MWZkNWE3ODg0MDEyNGMxNjc3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uUHvxwtDhC8TEFnVY9UBniYIGVRSZcUF6XTmyUI9NiU';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// Função para buscar dados da API com o Bearer Token
async function fetchMovies(endpoint, containerId) {
    const response = await fetch(`${BASE_URL}${endpoint}?language=pt-BR`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`
        }
    });
    const data = await response.json();
    displayMovies(data.results, containerId);
}

// Função para exibir filmes no catálogo
function displayMovies(movies, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    movies.forEach(movie => {
        const movieElement = document.createElement('img');
        movieElement.src = `${IMAGE_BASE_URL}${movie.poster_path}`;
        movieElement.alt = movie.title || movie.name;
        movieElement.classList.add('movie-item');

        // Adiciona o evento de clique para atualizar o destaque
        movieElement.addEventListener('click', () => {
            updateHighlight(movie);
        });

        container.appendChild(movieElement);
    });
}

// Função para atualizar o banner de destaque
function updateHighlight(movie) {
    const banner = document.querySelector('.banner img');
    const title = document.querySelector('.banner-info h1');
    
    banner.src = `${IMAGE_BASE_URL}${movie.backdrop_path || movie.poster_path}`;  // Usa o 'backdrop_path' ou 'poster_path' como fallback
    title.textContent = movie.title || movie.name;
}

// Função para pegar um filme aleatório e preencher o banner ao carregar a página
async function fetchRandomMovie() {
    const response = await fetch(`${BASE_URL}/movie/now_playing?language=pt-BR`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`
        }
    });
    const data = await response.json();
    
    // Escolhe um filme aleatório da lista retornada
    const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];
    
    // Atualiza o banner com o filme aleatório
    updateHighlight(randomMovie);
}

// Adiciona os eventos de clique nos botões de rolagem
function addScrollButtons() {
    const scrollLeftButtons = document.querySelectorAll('.scroll-left');
    const scrollRightButtons = document.querySelectorAll('.scroll-right');

    scrollLeftButtons.forEach(button => {
        button.addEventListener('click', () => {
            const carousel = button.nextElementSibling;
            carousel.scrollLeft -= 500; // Distância de rolagem
        });
    });

    scrollRightButtons.forEach(button => {
        button.addEventListener('click', () => {
            const carousel = button.previousElementSibling;
            carousel.scrollLeft += 500;
        });
    });
}

// Chamada das funções para preencher os carrosséis e o banner
fetchMovies('/movie/now_playing', 'lancamentos').then(addScrollButtons);
fetchMovies('/discover/movie?with_genres=35', 'comedias').then(addScrollButtons);
fetchRandomMovie(); // Preenche o banner com um filme aleatório ao carregar a página
