const apikey = '9f2e9af16494741bccbe23f914448e9a'; 
let year = '2023'
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&page=1&sort_by=popularity.desc&year=${year}`;

const content = document.getElementById('content')
const urlposter = `http://image.tmdb.org/t/p/w500/`

const dropdown = document.getElementById('year')

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.contains('bi-moon')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});



async function displayMovies(url) {
    const response = await fetch(url);
    const movies = await response.json();
    
    content.innerHTML = '';

    movies.results.forEach(data => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        const movieLink = document.createElement('a'); //แปลงเป็น tag
        movieLink.href = `movie.html?title=${encodeURIComponent(data.title)}`; // ส่งตัวหนังไป

        const img = document.createElement('img');
        img.src = `${urlposter}${data.poster_path}`;

        const title = document.createElement('h2');
        title.textContent = data.title.substring(0, 24);

        const vote = document.createElement('h4');
        vote.textContent = data.vote_average;
        vote.classList.add('vote');

        movieElement.appendChild(vote);
        movieLink.appendChild(img);
        movieElement.appendChild(title);
        movieElement.appendChild(movieLink);
        content.appendChild(movieElement);
    });

    console.log(movies);
}

dropdown.addEventListener('change', () => {
    year = dropdown.value;
    const updateUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&page=1&sort_by=popularity.desc&year=${year}`;
    displayMovies(updateUrl);
});

displayMovies(url);


