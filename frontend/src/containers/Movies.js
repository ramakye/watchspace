import React, { Component } from 'react';
import Movie from '../components/Movie';
import {graphql} from 'react-apollo';
import {allMovies} from '../queries/queries'


 class Movies extends Component {
    render() {
        let data = this.props.data
        if(data.loading){
            return <h2>We are loading your movies...</h2>
        }
        if(data.movies.length ===0){
            return <h2>No movies available</h2>
        }
        return (
            <div className ="movies">
                {data.movies.map((movie) => {
                    return <Movie 
                    key={movie.name}
                    name ={movie.name}
                    genre={movie.genre}
                    year={movie.year}
                    image={movie.image}/>

                })}
                
            </div>
        );
    }
}

export default graphql(allMovies)(Movies)