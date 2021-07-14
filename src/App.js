import './App.css'
import Nav from './IndexNav/Nav.js'
import Title from './Title'
import Picture from './Picture'
import './Style.css'

function App() {
  return (
    <div className="App">
      <div>
        <Picture />
      </div>
      <div>
        <Title />
      </div>
      <div>
        <Nav />
      </div>
    </div>
  );
}

export default App;
