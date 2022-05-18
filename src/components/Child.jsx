import React from 'react'   

function Child (props) {

    const handleChange = (e) => props.setUserInput(e.target.value)

    return (
        <div>
            <h2>Child Component</h2>
            <input type="text" onChange={handleChange}/>
        </div>
    )
}

export default Child