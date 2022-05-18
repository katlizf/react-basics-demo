// CLASS WAY OF WRITING COMPONENTS

import React, {Component} from 'react'

class Parent extends Component {
    constructor() {
        super() /*always needed for class components b/c it's inheriting from Component*/

        this.state = {
            userInput: "" /*name*/
        }
    }
    render() {
        return (
            <div>
            <h2>Parent component</h2>
            <p>{this.state.userInput}</p>
            <input type="text" onChange={e => this.setState({userInput: e.target.value})}/>
            </div>
        )
    }
}

export default Parent


/* NOTES
- don't need to use ${}, can just use {}
- this.setState is a built-in function to set the state of an element
- rfce command auto-builds a simple component
*/

