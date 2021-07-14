import Projects from './Projects.js'
import About from './About'
import CV from './CV.js'
import Contact from './Contact.js'
import homeSlide from './homeSlide.js'
import React, {useState} from 'react'


function Nav() {
    const [value, setValue] = useState(false);

    function handleChange(newValue) {
      setValue(newValue);
    }
    return (
        
    <div className="navigation">
        <div>
            <Projects value={value} onChange={handleChange}/>
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