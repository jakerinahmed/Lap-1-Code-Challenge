const express = require("express")
const app = express()
const cors = require('cors')
app.use(cors())

movies = [
    { id: 1, title: "Batman Begins", link:"https://en.wikipedia.org/wiki/Batman_Begins" },
    { id: 2, title: "The Dark Knight", link:"https://en.wikipedia.org/wiki/The_Dark_Knight" },
    { id: 3, title: "The Dark Knight Rises", link: "https://en.wikipedia.org/wiki/The_Dark_Knight_Rises" },
    { id: 4, title: "Inception", link: "https://en.wikipedia.org/wiki/Inception" },
    { id: 5, title: "Interstellar", link: "https://en.wikipedia.org/wiki/Interstellar_(film)"},
    { id: 6, title: "The Godfather", link:"https://en.wikipedia.org/wiki/The_Godfather" },
    { id: 7, title: "No Country For Old Men", link:"https://en.wikipedia.org/wiki/No_Country_for_Old_Men"},
    { id: 8, title: "Whiplash", link: "https://en.wikipedia.org/wiki/Whiplash_(2014_film)"},
    { id: 9, title: "The Incredibles", link: "https://en.wikipedia.org/wiki/The_Incredibles"},
    { id: 10, title: "Ratatouille", link:"https://en.wikipedia.org/wiki/Ratatouille_(film)" }
]

app.get("/", (req, res) => {
    res.send("Hello World! This is a search engine API")
})

app.get("/movies", (req, res) => {
    res.send(movies)
})

app.get("movies", (req, res) => {
    res.json(movies)
})

app.get("/movies/:id", (req, res) => {
    try {
        const movieId = parseInt(req.params.id)
        const selectedMovie = movies.find(movie => movie.id === movieId)
        if (!selectedMovie) {
            throw new Error("Your search did not match any documents, try search again.")
        }
        res.send(selectedMovie)

    } catch (error) {
        res.status(404).send({message: error.message})
    }
    res.send(selectedMovie)
})



tvShow = [
    { id: 1, title: "Game Of Thrones", link: "https://en.wikipedia.org/wiki/Game_of_Thrones" },
    { id: 2, title: "Breaking Bad", link: "https://en.wikipedia.org/wiki/Breaking_Bad"},
    { id: 3, title: "The Boys", link:"https://en.wikipedia.org/wiki/The_Boys_(TV_series)" },
    { id: 4, title: "Stranger Things", link: "https://en.wikipedia.org/wiki/Stranger_Things" },
    { id: 5, title: "Better Call Saul", link: "https://en.wikipedia.org/wiki/Better_Call_Saul" },
    { id: 6, title: "Peaky Blinders", link: "https://en.wikipedia.org/wiki/Peaky_Blinders_(TV_series)"},
    { id: 7, title: "Severance", link:"https://en.wikipedia.org/wiki/Severance_(TV_series)"},
    { id: 8, title: "Modern Family", link: "https://en.wikipedia.org/wiki/Modern_Family"},
    { id: 9, title: "Friends", link: "https://en.wikipedia.org/wiki/Friends" },
    { id: 10, title: "Rick and Morty", link: "https://en.wikipedia.org/wiki/Rick_and_Morty" }
]

app.get("/tv-shows", (req, res) => {
    res.send(tvShow)
})

app.get("tv-shows", (req, res) => {
    res.json(tvShow)
})

app.get("/tv-shows/:id", (req, res) => {
    try {
        const seriesId = parseInt(req.params.id)
        const selectedSeries = tvShow.find(series => series.id === seriesId)
        if (!selectedSeries) {
            throw new Error("Your search did not match any documents, try search again.")
        }
        res.send(selectedSeries)

    } catch (error) {
        res.status(404).send({message: error.message})
    }
    res.send(selectedSeries)
})



videoGames = [
    { id: 1, title: "Call Of Duty: Black Ops", link:"https://en.wikipedia.org/wiki/Call_of_Duty:_Black_Ops" },
    { id: 2, title: "Call Of Duty: Black Ops II", link: "https://en.wikipedia.org/wiki/Call_of_Duty:_Black_Ops_II"},
    { id: 3, title: "Call Of Duty: Black Ops III", link: "https://en.wikipedia.org/wiki/Call_of_Duty:_Black_Ops_III"},
    { id: 4, title: "Call Of Duty: Black Ops IV", link:"https://en.wikipedia.org/wiki/Call_of_Duty:_Black_Ops_4" },
    { id: 5, title: "Elden Ring", link:"https://en.wikipedia.org/wiki/Elden_Ring" },
    { id: 6, title: "Sekiro: Shadows Die Twice", link:"https://en.wikipedia.org/wiki/Sekiro:_Shadows_Die_Twice" },
    { id: 7, title: "Dark Souls", link:"https://en.wikipedia.org/wiki/Dark_Souls_(video_game)"},
    { id: 8, title: "Dark Souls II", link: "https://en.wikipedia.org/wiki/Dark_Souls_II"},
    { id: 9, title: "Dark Souls III", link: "https://en.wikipedia.org/wiki/Dark_Souls_III"},
    { id: 10, title: "Minecraft", link: "https://en.wikipedia.org/wiki/Minecraft"}
]

app.get("/video-games", (req, res) => {
    res.send(videoGames)
})

app.get("video-games", (req, res) => {
    res.json(videoGames)
})

app.get("/video-games/:id", (req, res) => {
    try {
        const gameId = parseInt(req.params.id)
        const selectedGame = videoGames.find(game => game.id === gameId)
        if (!selectedGame) {
            throw new Error("Your search did not match any documents, try search again.")
        }
        res.send(selectedGame)

    } catch (error) {
        res.status(404).send({message: error.message})
    }
    res.send(selectedGame)
})


module.exports = app;
