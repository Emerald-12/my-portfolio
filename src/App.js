import './App.css'
import './Style.css'

import Nav from './Components/Nav.js'
import Title from './Components/Title'
import Picture from './Components/Picture'
import {useSidebar} from './SidebarContext'


 
function App() {
  const sidebar = useSidebar()
  return (
    <div style={{position:"relative"}}>
      <div className="App">
          <Picture />
          <Title />
          <Nav />
      </div>
      <div className = { sidebar ? 'contentAfter' : 'contentBefore' }>
        <p>hello portfolio world</p>
      </div>
    </div>
  );
}

export default App;
