const searchResults = document.getElementById('searchEngine');
const searchBar = document.getElementById('searchBar');

searchResults.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchQuery = searchBar.value;
    Promise.all([
        fetch('http://localhost:3000/movies'),
        fetch('http://localhost:3000/tv-shows'),
        fetch('http://localhost:3000/video-games') 
    ]).then((responses) => Promise.all(responses.map(res => res.json())))
    .then((data) => data.forEach(obj => {
        obj.forEach(arr => {
            if ((arr.title).includes(searchQuery)) {
                console.log(arr);
            }
        });
    }));
})
