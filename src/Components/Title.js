import React, {Component} from 'react'
import ReactDom from 'react-dom'
import Main from './Main'


class Title extends Component {
    render() {
        return <h1> {this.props.title} </h1>
    }
}



export default Title
