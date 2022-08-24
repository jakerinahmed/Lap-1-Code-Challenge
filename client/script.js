const searchResults = document.getElementById('searchResults')
const ul = document.querySelector('ul');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const search = urlParams.get('search');
console.log(search);

Promise.all([
    fetch('http://localhost:3000/movies'),
    fetch('http://localhost:3000/tv-shows'),
    fetch('http://localhost:3000/video-games') 
]).then((responses) => Promise.all(responses.map(res => res.json())))
.then((data) => data.forEach(obj => {
    obj.forEach(arr => {
        if ((arr.title).includes(search)) {
            console.log(arr);
            const newA = document.createElement('a');
   
            newA.setAttribute('href', arr.link);
            ul.appendChild(newA);
            const newLi = document.createElement('li');
            
            newLi.textContent = arr.title;
            newA.appendChild(newLi);
        }
    });
}));
