import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub as Git} from '@fortawesome/free-brands-svg-icons'

const FooterCont = styled.div`
    position:absolute;
    bottom:0;
    background-color: #202020;
    width:100vw;
    height:2.5rem;
`
const FooterIcon = styled(FontAwesomeIcon)`
height:100%;
width:auto;
color:white;
`
const FooterCopy = styled.p`

`

export default function Footer() {

    return (
        <FooterCont>
            <FooterIcon icon={Git} size='2x'/>
            {/* <FooterCopy text={'&copy;'}/> */}
        </FooterCont>
    )
}