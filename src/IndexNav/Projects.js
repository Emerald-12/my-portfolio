import homeSlide from './homeSlide.js'

function Projects(props) {
    function handleChange(event) {
        // Here, we invoke the callback with the new value
        props.onChange(event.target.value);
    }
    return (
        <div>
            <button value={props.value} onClick ={handleChange}><h1>Projects</h1></button>
        </div>
    )
}

export default Projects