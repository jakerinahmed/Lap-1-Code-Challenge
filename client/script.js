const searchResults = document.getElementById('searchEngine');
const searchBar = document.getElementById('searchBar');

searchResults.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchQuery = searchBar.value;
    fetch('http://localhost:3000/movies')
    .then((res) => res.json())
    .then((data) => data.forEach(obj => {
        if ((obj.movie).includes(searchQuery)) {
            console.log(obj);
        }
    }));
})
