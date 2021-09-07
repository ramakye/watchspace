const Movie = require('../model/model')


const movies= [
    {id:1, name : 'John Wick Parabellum', genre:'Action', year:'2020', image:"https://cutt.ly/CWtY6Nn"},
    {id:2, name : 'John Wick Parabellum', genre:'Action', year:'2020', image:"https://shorturl.at/gAGQV"},
    {id:3, name : 'John Wick Parabellum', genre:'Action', year:'2020', image:"https://shorturl.at/gAGQV"},
    {id:4, name : 'John Wick Parabellum', genre:'Action', year:'2020', image:"https://shorturl.at/gAGQV"},
    {id:5, name : 'John Wick Parabellum', genre:'Action', year:'2020', image:"https://shorturl.at/gAGQV"},
    {id:6, name : 'John Wick Parabellum', genre:'Action', year:'2020', image:"https://shorturl.at/gAGQV"},
    {id:7, name : 'John Wick Parabellum', genre:'Action', year:'2020', image:"https://shorturl.at/gAGQV"},

]

const resolvers = {
    movies: () => {
        //for finding all movies
        return Movie.find({})
    },

    movieByName :(args) => {
        return Movie.findone({name:args.name})
    },
    
    addMovie: (args)=>{
        let movie = new Movie({
            name: args.name,
            genre : args.genre,
            year: args.year
        })
        movie.save()

        return movie
    }
}


module.exports = resolvers