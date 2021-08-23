// eslint-disable-next-line
import styled, {css} from 'styled-components'

const Display = styled.div`
    grid-area:iframe;
    margin:1rem;
`
const Frame =styled.iframe`
    width: 100%;
    height: 100%; 
    
`


function ProjectDisplay(props) {
   
    return (
        <Display>
            <Frame src='https://tomkhcoding.github.io/pokemon-search/' title='test' name='pokemon'></Frame>
        </Display>
    )
}

export default ProjectDisplay