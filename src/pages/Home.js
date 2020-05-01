import React, { Component } from 'react'
import { Title } from '../component/Title'
import { SearchForm } from '../component/SearchForm'
import { MoviesList } from '../component/MoviesList'

export class Home extends Component {
    state = { usedSearch: false, results: [] }

    _handleResults = (results) => {
        this.setState({ results, usedSearch: true })
      }
    
      _renderResults () {
         return  this.state.results.length === 0
          ? <p>Sorry! Results not found! </p>
          : <MoviesList movies={this.state.results} />
      }
    render () {
        return (
            <div>
                <div id="homeMenu" className="columns">
                    <div className="column is-full">
                        <Title>Search Movies</Title>
                        <div className='SearchForm-wrapper'>
                            <SearchForm onResults={this._handleResults}/>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-full">
                        {
                            this.state.usedSearch
                            ?  this._renderResults()
                            : <small>Use the form to search a movie</small>
                        }
                    </div>
                        
                </div>
                
            </div>

            )
        }
}