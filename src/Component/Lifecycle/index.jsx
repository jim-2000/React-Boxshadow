import React, { Component } from 'react'

export default class Index extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: ["JIM","Hossain"]
        }
        console.log("props")
    }
    componentDidMount(){
        console.log("Didmout")
    }
    componentDidUpdate(prevProps, prevstate){
console.log("updated", prevProps, prevstate)
    }

    render() {
        console.log("Render")
        return (
            <>
                My {this.state.name[1]} 
                <button onClick={()=> {this.setState({name:"Hossain"})}}>change</button>

            </>
        )
    }
}
