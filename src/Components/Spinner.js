import React, { Component } from 'react'
import Gif from './Gif.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <img src={Gif} alt="Gif" />
            </div>
        )
    }
}

export default Spinner
