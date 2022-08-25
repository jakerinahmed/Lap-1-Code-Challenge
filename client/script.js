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
            createResult(ul, obj);
        } else {
            console.log(rand);
            if (random && obj.id === rand) {
                createResult(ul, obj);
            }
        }
    });
}));

function createResult(list, object) {
    const result = document.createElement('div');
    const title = document.createElement('a');
    const linkDiv = document.createElement('div');
    const link = document.createElement('a');
    const description = document.createElement('p');
    link.textContent = object.link;
    title.textContent = object.title;
    description.textContent = object.description;
    link.setAttribute('href', object.link);
    link.setAttribute('class', 'resultLink');
    linkDiv.setAttribute('class', 'resultDiv');
    title.setAttribute('href', object.link);
    const newLi = document.createElement('li');
    linkDiv.appendChild(link);
    result.appendChild(linkDiv);
    result.appendChild(title);
    result.appendChild(description);
    newLi.appendChild(result);
    list.appendChild(newLi);
}

h1.onclick = () => {
    location.href = "./index.html";
}
