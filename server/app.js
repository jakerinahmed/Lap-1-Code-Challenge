const express = require("express")
const app = express()
const cors = require('cors')
app.use(cors())

movies = [
    { id: 1, movie: "Batman Begins" },
    { id: 2, movie: "The Dark Knight" },
    { id: 3, movie: "The Dark Knight Rises" },
    { id: 4, movie: "Inception" },
    { id: 5, movie: "Interstellar" },
    { id: 6, movie: "The Godfather" },
    { id: 7, movie: "No Country For Old Men"},
    { id: 8, movie: "Whiplash" },
    { id: 9, movie: "The Incredibles" },
    { id: 10, movie: "Ratatouille" }
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
    { id: 1, series: "Game Of Thrones" },
    { id: 2, series: "Breaking Bad" },
    { id: 3, series: "The Boys" },
    { id: 4, series: "Stranger Things" },
    { id: 5, series: "Better Call Saul" },
    { id: 6, series: "Peaky Blinders" },
    { id: 7, series: "Severance"},
    { id: 8, series: "Modern Family" },
    { id: 9, series: "Friends" },
    { id: 10, series: "Rick and Morty" }
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
    { id: 1, game: "Call Of Duty: Black Ops" },
    { id: 2, game: "Call Of Duty: Black Ops II" },
    { id: 3, game: "Call Of Duty: Black Ops III" },
    { id: 4, game: "Call Of Duty: Black Ops IV" },
    { id: 5, game: "Elden Ring" },
    { id: 6, game: "Sekiro: Shadows Die Twice" },
    { id: 7, game: "Dark Souls"},
    { id: 8, game: "Dark Souls II" },
    { id: 9, game: "Dark Souls III" },
    { id: 10, game: "Minecraft" }
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
