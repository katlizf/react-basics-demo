//  FUNCTIONAL WAY OF WRITING COMPONENTS

import React, {useState} from 'react'
import Child from './Child'

function Parent() {
    const [userInput, setUserInput] = useState("")
    // userInput is a variable, set"UserInput" is a setter
    return (
        <div>
            <h2>Parent Component</h2>
            <Child userInput={userInput} setUserInput={setUserInput}/>
            [gave child the two props from above]
            <p>{userInput}</p>
        </div>
    )
}

export default Parent