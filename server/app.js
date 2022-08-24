const express = require("express")
const app = express()
const cors = require('cors')
app.use(cors())

movies = [
    { id: 1, movie: "Batman Begins", link:"https://en.wikipedia.org/wiki/Batman_Begins" },
    { id: 2, movie: "The Dark Knight", link:"https://en.wikipedia.org/wiki/The_Dark_Knight" },
    { id: 3, movie: "The Dark Knight Rises", link: "https://en.wikipedia.org/wiki/The_Dark_Knight_Rises" },
    { id: 4, movie: "Inception", link: "https://en.wikipedia.org/wiki/Inception" },
    { id: 5, movie: "Interstellar", link: "https://en.wikipedia.org/wiki/Interstellar_(film)"},
    { id: 6, movie: "The Godfather", link:"https://en.wikipedia.org/wiki/The_Godfather" },
    { id: 7, movie: "No Country For Old Men", link:"https://en.wikipedia.org/wiki/No_Country_for_Old_Men"},
    { id: 8, movie: "Whiplash", link: "https://en.wikipedia.org/wiki/Whiplash_(2014_film)"},
    { id: 9, movie: "The Incredibles", link: "https://en.wikipedia.org/wiki/The_Incredibles"},
    { id: 10, movie: "Ratatouille", link:"https://en.wikipedia.org/wiki/Ratatouille_(film)" }
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
    { id: 1, series: "Game Of Thrones", link: "https://en.wikipedia.org/wiki/Game_of_Thrones" },
    { id: 2, series: "Breaking Bad", link: "https://en.wikipedia.org/wiki/Breaking_Bad"},
    { id: 3, series: "The Boys", link:"https://en.wikipedia.org/wiki/The_Boys_(TV_series)" },
    { id: 4, series: "Stranger Things", link: "https://en.wikipedia.org/wiki/Stranger_Things" },
    { id: 5, series: "Better Call Saul", link: "https://en.wikipedia.org/wiki/Better_Call_Saul" },
    { id: 6, series: "Peaky Blinders", link: "https://en.wikipedia.org/wiki/Peaky_Blinders_(TV_series)"},
    { id: 7, series: "Severance", link:"https://en.wikipedia.org/wiki/Severance_(TV_series)"},
    { id: 8, series: "Modern Family", link: "https://en.wikipedia.org/wiki/Modern_Family"},
    { id: 9, series: "Friends", link: "https://en.wikipedia.org/wiki/Friends" },
    { id: 10, series: "Rick and Morty", link: "https://en.wikipedia.org/wiki/Rick_and_Morty" }
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
    { id: 1, game: "Call Of Duty: Black Ops", link:"https://en.wikipedia.org/wiki/Call_of_Duty:_Black_Ops" },
    { id: 2, game: "Call Of Duty: Black Ops II", link: "https://en.wikipedia.org/wiki/Call_of_Duty:_Black_Ops_II"},
    { id: 3, game: "Call Of Duty: Black Ops III", link: "https://en.wikipedia.org/wiki/Call_of_Duty:_Black_Ops_III"},
    { id: 4, game: "Call Of Duty: Black Ops IV", link:"https://en.wikipedia.org/wiki/Call_of_Duty:_Black_Ops_4" },
    { id: 5, game: "Elden Ring", link:"https://en.wikipedia.org/wiki/Elden_Ring" },
    { id: 6, game: "Sekiro: Shadows Die Twice", link:"https://en.wikipedia.org/wiki/Sekiro:_Shadows_Die_Twice" },
    { id: 7, game: "Dark Souls", link:"https://en.wikipedia.org/wiki/Dark_Souls_(video_game)"},
    { id: 8, game: "Dark Souls II", link: "https://en.wikipedia.org/wiki/Dark_Souls_II"},
    { id: 9, game: "Dark Souls III", link: "https://en.wikipedia.org/wiki/Dark_Souls_III"},
    { id: 10, game: "Minecraft", link: "https://en.wikipedia.org/wiki/Minecraft"}
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
