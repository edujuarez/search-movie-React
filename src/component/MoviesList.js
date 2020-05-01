import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Movie } from './Movie'

export class MoviesList extends Component {
    static propTypes = {
        movies: PropTypes.array
    }

    render () {
        const { movies } = this.props
        
        //Filtro el arreglo que devuelve la API para no renderizar repetidos y evitar bugs
        let moviesFiltered = movies.filter((valorActual, indiceActual, arreglo) => {
          return arreglo.findIndex(
            valorDelArreglo =>JSON.stringify(valorDelArreglo) === JSON.stringify(valorActual)
            ) === indiceActual
        });
        return(
          <div className='MoviesList columns' >
            {
              moviesFiltered.map(movie => {
                return (
                <div key= { movie.imdbID } className='MoviesList-item column is-one-fifth'>
                  < Movie
                    id= { movie.imdbID }
                    title= { movie.Title }
                    year= { movie.Year }
                    poster= { movie.Poster }
                  />
                </div>
                )
              })
            }
          </div>
        )
    }
}