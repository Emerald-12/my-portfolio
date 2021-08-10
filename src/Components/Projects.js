import ProjectDisplay from './ProjectDisplay'
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

function Projects() {
    let arr = ['pokemon', 'not pokemon']

    return (
        <Router basename='/my-portfolio/projects'>
            <div style={{display:'flex'}}>
                <ul className = 'projectList'>
                    <li>
                        <Link to = {`/${arr[0]}`}>
                            <button>
                                <h1 >Project One</h1>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <button>
                            <h1>Project Two</h1>
                        </button>
                    </li>
                    <li>
                        <button>
                            <h1>Project Three</h1>
                        </button>
                    </li>
                    <li>
                        <button>
                            <h1>Project Four</h1>
                        </button>
                    </li>
                    <li>
                        <button>
                            <h1>Project Five</h1>
                        </button>
                    </li>
                </ul>

                <Switch>
                    <Route path= {`/${arr[0]}`} component ={ProjectDisplay}/>
                </Switch>
            
            </div>
        </Router>
    )
}

export default Projects