
    //const searchBar = event.target.searchBar.value;
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
    fetch(`http://localhost:3000/movies`)
    .then(response => response.json())
    .then(data => h3.innerHTML = data)
})
