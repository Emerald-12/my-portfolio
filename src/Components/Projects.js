import {useSidebar, useSidebarUpdate} from '../SidebarContext'
import React, {useEffect} from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"

function Projects() {
    const sidebar = useSidebar();
    const toggleSidebar = useSidebarUpdate();
    useEffect(() => {
        if (sidebar==false){
            toggleSidebar()
        } else {return}
      });
    

    return (
        <div style={{display:'flex'}}>
            <ul className = 'projectList'>
                <li>
                    <button onClick={toggleSidebar}>
                        <h1 >Project One</h1>
                    </button>
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
            <div className='projectDisplay'>
                <iframe id='iframethingy' src='https://tomkhcoding.github.io/pokemon-search/' title='test'></iframe>
            </div>
        </div>
    )
}

export default Projects