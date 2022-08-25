const express = require("express")
const app = express()
const cors = require('cors')
app.use(cors())

movies = [
    { id: 1, title: "Batman Begins", link:"https://en.wikipedia.org/wiki/Batman_Begins", description: "Batman Begins is a 2005 superhero film directed by Christopher Nolan and written by Nolan and David S. Goyer. The film is based on the DC Comics character ..." },
    { id: 2, title: "The Dark Knight", link:"https://en.wikipedia.org/wiki/The_Dark_Knight", description: "The Dark Knight is a 2008 superhero film directed by Christopher Nolan from a screenplay he co-wrote with his brother Jonathan. Based on the DC Comics ..." },
    { id: 3, title: "The Dark Knight Rises", link: "https://en.wikipedia.org/wiki/The_Dark_Knight_Rises", description: "The Dark Knight Rises is a 2012 superhero film directed by Christopher Nolan, who co-wrote the screenplay with his brother Jonathan Nolan, and the story ..." },
    { id: 4, title: "Inception", link: "https://en.wikipedia.org/wiki/Inception", description:"Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with Emma Thomas, his wife." },
    { id: 5, title: "Interstellar", link: "https://en.wikipedia.org/wiki/Interstellar_(film)", description: "Interstellar is a 2014 epic science fiction film co-written, directed and produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, ..."},
    { id: 6, title: "The Godfather", link:"https://en.wikipedia.org/wiki/The_Godfather", description: "It is the first installment in The Godfather trilogy. The story, spanning from 1945 to 1955, chronicles the Corleone family under patriarch Vito Corleone ( ..." },
    { id: 7, title: "No Country For Old Men", link:"https://en.wikipedia.org/wiki/No_Country_for_Old_Men", description: "No Country for Old Men is a 2007 American neo-Western crime thriller film written and directed by Joel and Ethan Coen, based on Cormac McCarthy's 2005 novel ..."},
    { id: 8, title: "Whiplash", link: "https://en.wikipedia.org/wiki/Whiplash_(2014_film)", description: "Whiplash is a 2014 American psychological drama film written and directed by Damien Chazelle, and starring Miles Teller, J. K. Simmons, Paul Reiser and ..."},
    { id: 9, title: "The Incredibles", link: "https://en.wikipedia.org/wiki/The_Incredibles", description: "The Incredibles is a 2004 American computer-animated superhero film produced by Pixar Animation Studios and released by Walt Disney Pictures."},
    { id: 10, title: "Ratatouille", link:"https://en.wikipedia.org/wiki/Ratatouille_(film)", description: "Ratatouille is a 2007 American computer-animated comedy film produced by Pixar Animation Studios and released by Walt Disney Pictures." }
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
    { id: 11, title: "Game Of Thrones", link: "https://en.wikipedia.org/wiki/Game_of_Thrones", description: "Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and ..." },
    { id: 12, title: "Breaking Bad", link: "https://en.wikipedia.org/wiki/Breaking_Bad", description: "Breaking Bad is an American crime drama television series created and produced by Vince Gilligan. Set and filmed in Albuquerque, New Mexico, the series ..."},
    { id: 13, title: "The Boys", link:"https://en.wikipedia.org/wiki/The_Boys_(TV_series)" , description: "The Boys is an American superhero television series developed by Eric Kripke for Amazon Prime Video. Based on the comic book of the same name by Garth Ennis ..."},
    { id: 14, title: "Stranger Things", link: "https://en.wikipedia.org/wiki/Stranger_Things", description: "Stranger Things is an American science fiction drama television series created by the Duffer Brothers, who also serve as showrunners and are executive ..." },
    { id: 15, title: "Better Call Saul", link: "https://en.wikipedia.org/wiki/Better_Call_Saul", description: "Better Call Saul is an American crime and legal drama television series created by Vince Gilligan and Peter Gould. Part of the Breaking Bad franchise, ..." },
    { id: 16, title: "Peaky Blinders", link: "https://en.wikipedia.org/wiki/Peaky_Blinders_(TV_series)", description: "Peaky Blinders is a British crime drama television series created by Steven Knight. Set in Birmingham, England, it follows the exploits of the Peaky ..."},
    { id: 17, title: "Severance", link:"https://en.wikipedia.org/wiki/Severance_(TV_series)", description: "Severance is an American science fiction psychological thriller television series created by Dan Erickson and directed by Ben Stiller and Aoife McArdle."},
    { id: 18, title: "Modern Family", link: "https://en.wikipedia.org/wiki/Modern_Family", description: "Modern Family is an American family sitcom television series created by Christopher Lloyd and Steven Levitan for the American Broadcasting Company."},
    { id: 19, title: "Friends", link: "https://en.wikipedia.org/wiki/Friends", description: "Friends is an American television sitcom created by David Crane and Marta Kauffman, which aired on NBC from September 22, 1994, to May 6, 2004, ..." },
    { id: 20, title: "Rick and Morty", link: "https://en.wikipedia.org/wiki/Rick_and_Morty", description: "Rick and Morty is an American adult animated science-fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming ..." }
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
    { id: 21, title: "Call Of Duty: Black Ops", link:"https://en.wikipedia.org/wiki/Call_of_Duty:_Black_Ops", description: "Call of Duty: Black Ops is a 2010 first-person shooter game developed by Treyarch and published by Activision. It was released worldwide in November 2010 ..." },
    { id: 22, title: "Call Of Duty: Black Ops II", link: "https://en.wikipedia.org/wiki/Call_of_Duty:_Black_Ops_II", description: "Call of Duty: Black Ops II is a 2012 first-person shooter video game developed by Treyarch and published by Activision. It was released for Microsoft ..."},
    { id: 23, title: "Call Of Duty: Black Ops III", link: "https://en.wikipedia.org/wiki/Call_of_Duty:_Black_Ops_III", description: "Call of Duty: Black Ops III is a 2015 first-person shooter game developed by Treyarch and published by Activision. It is the twelfth entry in the Call of ..."},
    { id: 24, title: "Call Of Duty: Black Ops IV", link:"https://en.wikipedia.org/wiki/Call_of_Duty:_Black_Ops_4", description: "Call of Duty: Black Ops 4 (stylized as Call of Duty: Black Ops IIII) is a 2018 multiplayer first-person shooter developed by Treyarch and published by ..." },
    { id: 25, title: "Elden Ring", link:"https://en.wikipedia.org/wiki/Elden_Ring" , description: "Elden Ring is a 2022 action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment. It was directed by Hidetaka Miyazaki ..."},
    { id: 26, title: "Sekiro: Shadows Die Twice", link:"https://en.wikipedia.org/wiki/Sekiro:_Shadows_Die_Twice", description: "Sekiro: Shadows Die Twice is a 2019 action-adventure game developed by FromSoftware and published by Activision. The game follows a shinobi known as Wolf as ..." },
    { id: 27, title: "Dark Souls", link:"https://en.wikipedia.org/wiki/Dark_Souls_(video_game)", description: "Dark Souls is a series of action role-playing games developed by FromSoftware and created by Hidetaka Miyazaki. The series began with the release of Dark ..."},
    { id: 28, title: "Dark Souls II", link: "https://en.wikipedia.org/wiki/Dark_Souls_II", description: "Dark Souls II is a 2014 action role-playing game developed by FromSoftware and published by Bandai Namco Games. An entry in the Dark Souls series, ..."},
    { id: 29, title: "Dark Souls III", link: "https://en.wikipedia.org/wiki/Dark_Souls_III", description: "Dark Souls III is a 2016 action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment for PlayStation 4, Xbox One, .."},
    { id: 30, title: "Minecraft", link: "https://en.wikipedia.org/wiki/Minecraft", description: "Minecraft is a sandbox video game developed by Mojang Studios. The game was created by Markus 'Notch' Persson in the Java programming language."}
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
