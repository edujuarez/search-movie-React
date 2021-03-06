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
                <section className="columns is-multiline is-mobile">
                    <div className="column is-full">
                        <h1 className="title">{Title}</h1>
                    </div>
                    
                    
                    <div className="column is-half">
                    <img src={Poster} alt={Title}/>
                    </div>
                    <div className="column is-half">
                        <div className="column is-half" >
                        <h2 className="subtitle">
                            <span><strong>Sinopsis: </strong> {Plot}</span>
                        </h2>
                    </div>
                    <div className="column is-half" >
                        <h2 className="subtitle">
                           <strong>Cast: </strong>
                           <span>{Actors}</span>
                        </h2>
                    </div>
                    <div className="column is-half" >
                        <h2 className="subtitle">
                            <strong>Score: </strong><span>{Metascore}</span>
                        </h2>
                    </div>
                    </div>
                   
                    <div className="column is-full">
                      < ButtonBackToHome />  
                    </div>
                    
                 </section>
            </div>
        )
    }
}