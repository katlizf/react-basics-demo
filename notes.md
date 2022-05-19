<h1>Notes</h1>

1. Starting a new React application (from command line)
    - CD into correct directory where you want the new react folder
    - Run "npx create-react-app@latest nameYourFolder"

    &nbsp;
2. React(jsx) files will have imports at the top

    &nbsp;
3. Typically the index.js will have a root variable to say all the code is entered into this div root in the html file

    &nbsp;
4. "npm start" will start app automatically in browser on port 3000

    &nbsp;
5. Best to break things out into their smallest components
    - Have a components folder inside the src folder for each
    - 2 ways to write components: functional and class

    &nbsp;
6. Writing components:
    - At top of each component file, code "import React, {Component} from 'react'"
    - Basic set-up below import React statement:

                    class componentName extends Component {

                        render() {
                            return (
                                whatever is being returned has to be a single HTML element (ex. a single div wrapping around everything else)
                            )
                        }
                        )
                    }
                    export default componentName
    - Go back to Index.js to implement it by using an import statement at the top (ex. "import componentName from './components/componentName')
    - Then can insert the componentName inside Index.js inside '< />'