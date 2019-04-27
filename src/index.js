import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import SeaSonDisplay from './seaSonDisplay'
import Spinner from './spinner'


export class App extends Component {
    constructor(props) {
        super(props)
        this.state = { lat: null, err: null }
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position)
                this.setState({
                    lat: position.coords.latitude
                })
            },
            (err) => {
                console.log(err)
                this.setState({
                    err: err.message
                })
            }
        )
    }
    render() {
        if (this.state.lat && !this.state.err)
            return (<SeaSonDisplay lat={this.state.lat}/>)
        else if (!this.state.lat && this.state.err)
            return (<h2>Latitude:{this.state.err}</h2>)

            return(<Spinner message="Please Allow Location Access."/>)
    }
}

export default App
ReactDOM.render(<App />, document.querySelector('#root'))