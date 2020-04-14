import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ButtonBackToHome } from '../component/ButtonBackToHome'

const API_KEY = '4287ad07'

/*
    FALTA
agregar css
mejorar boton back
*/

export class Details extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { movie: {} }

    _fetchMovie ({ movieId }) {
        //Mismo fetch pero buscando por el parametro id
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`)
            .then(res => res.json())
            .then(movie => {
                console.log(movie)
                this.setState( {movie})
            })
    }

    _goBack () {
        window.history.back()
    }

    componentDidMount () {
        console.log(this.props)
        const { movieId } = this.props.match.params
        this._fetchMovie({ movieId })
    }
    render() {
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie

        return (
            <div>
                < ButtonBackToHome />
                <h1>{Title}</h1>
                <img src={Poster} alt={Title}/>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )
    }
}