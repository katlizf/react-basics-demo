# Practice with React Basics

Notes 

* Starting a new React application (from command line)
    - CD into correct directory where you want the new react folder
    - Run `npx create-react-app@latest nameYourFolder`

* React(jsx) files will have imports at the top

* Typically the index.js will have a root variable to say all the code is entered into this div root in the html file

* "npm start" will start app automatically in browser on port 3000

* Best to break things out into their smallest components
    - Have a components folder inside the src folder for each
    - 2 ways to write components: functional and class

* Writing components:
    - Basic set-up for Class compoenent:
   
                    import React, {Component} from 'react'
                    
                    export default class componentName extends Component {

                        render() {
                            return (
                               can only return a single HTML element
                            )
                        }
                        )
                    }
    - Basic set-up for Functional component:

                    import React from 'react'
                    
                    function componentName() {
                    
                        return(
                            can only return a single HTML element
                        )
                    }
                    export default componentName
    - Go back to Index.js to implement it by using an import statement at the top (ex. `import ComponentName from './components/ComponentName'`)
    - Then can add `<ComponentName />` inside parent jsx file
