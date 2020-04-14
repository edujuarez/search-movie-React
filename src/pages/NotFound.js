import  React, { Component } from 'react'
import { ButtonBackToHome } from '../component/ButtonBackToHome'

export class NotFound extends Component {
    render() {
        return(
            <div>
                <h1 className='title'>Error 404!</h1>
                <h2 className='subtitle'>Ups! Page Not Found!</h2>
                <div>
                    <ButtonBackToHome/>
                </div>
            </div>
            
        )
    }

}