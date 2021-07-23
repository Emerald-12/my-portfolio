import Projects from './Projects.js'
import About from './About'
import CV from './CV.js'
import Contact from './Contact.js'

function Nav() {
    
    return (
        
    <div className="navigation">
        <div>
            <Projects />
        </div>
        
        <div>
            <About />
        </div>
        
        <div>
            <CV />
        </div>
        
        <div>
            <Contact />
        </div>
    </div>
    )
}
export default Nav