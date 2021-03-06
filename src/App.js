// eslint-disable-next-line
import { HashRouter as Router, Switch, Route, Link, Redirect, useHistory} from 'react-router-dom';
// eslint-disable-next-line
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";


// eslint-disable-next-line
import MobileHome from './Pages/Mobile/Mobile';
// eslint-disable-next-line
import Home from './Pages/Desktop/Home';


function App() {
  const mq = (window.matchMedia('(max-width: 769px)'))

  function RedirectMobile() {
    let history = useHistory();
    history.replace('/m/')

  }
  const url = window.location.href;
  if (mq.matches && !url.includes('/m/')) {
    RedirectMobile()
  }
  
  return (
        
    <div>
      <GlobalStyles />
      <Switch>
        <Route exact path ='/' component={Home}/>
        <Route exact path='/m/' component={MobileHome}/>
      </Switch>
    </div>
        
  );
}

export default App;