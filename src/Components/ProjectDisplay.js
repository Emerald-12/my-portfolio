// eslint-disable-next-line
import styled, {css} from 'styled-components'

const Display = styled.div`
    height:45vh;
    width:60vw;
`
const Frame =styled.iframe`
    width: 100%;
    height: 100%;   
`


function ProjectDisplay() {
   
    return (
        <Display>
            <Frame src='https://tomkhcoding.github.io/pokemon-search/' title='test'></Frame>
        </Display>
    )
}

export default ProjectDisplay