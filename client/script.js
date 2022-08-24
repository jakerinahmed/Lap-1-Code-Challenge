const searchResults = document.getElementById('searchResults')
const ul = document.querySelector('ul');
const h1 = document.querySelector('h1');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const search = urlParams.get('search');
const random = urlParams.get('random');
const rand = Math.floor(Math.random() * 30) + 1;

Promise.all([
    fetch('http://localhost:3000/movies'),
    fetch('http://localhost:3000/tv-shows'),
    fetch('http://localhost:3000/video-games') 
]).then((responses) => Promise.all(responses.map(res => res.json())))
.then((data) => data.forEach(arr => {
    arr.forEach(obj => {
        if (((obj.title).toLowerCase()).includes(search.toLowerCase()) && !random) {
            const newA = document.createElement('a');
            newA.textContent = obj.title;
            newA.setAttribute('href', obj.link);
            const newLi = document.createElement('li');
            newLi.appendChild(newA);
            ul.appendChild(newLi);
        } else {
            console.log(rand);
            if (random && obj.id === rand) {
                const newA = document.createElement('a');
                newA.textContent = obj.title;
                newA.setAttribute('href', obj.link);
                const newLi = document.createElement('li');
                newLi.appendChild(newA);
                ul.appendChild(newLi);
            }
        }
    });
}));

h1.onclick = () => {
    location.href = "./index.html";
}
