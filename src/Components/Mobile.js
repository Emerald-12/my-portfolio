// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

export default function Mobile() {
    return (
        <Router exact path='my-portfolio/m/'>
            <div style ={{backgroundColor:'white'}}>
                <p>
                hello mobile world
                </p>
            </div>
        </Router>
    )
}