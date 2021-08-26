import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub as Git} from '@fortawesome/free-brands-svg-icons'


const FooterCont = styled.div`
    position:absolute;
    bottom:0;
    left:0;
    background-color: #202020;
    width:100%;
    height:2.5rem;
    padding:0;
    margin:0;
    display: grid;
        grid-template-columns: 0.5fr  2.5rem 2fr;
        grid-template-rows: 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
        "copyright github something ";
`
const FooterIcon = styled(FontAwesomeIcon)`
height:2rem;
width:2.5rem;
color:white;
padding:0 ;
margin:0;
grid-area: github;



:hover{
    filter:invert();
    background-color: black;
    border-radius:100%;
}
`

// .something { grid-area: something; }




const FooterCopy = styled.p`
    grid-area: copyright;
    margin:0;
    /* padding: 0;  */
    color:silver;
    font-size: 1.5rem;
    text-align: center;
    align-self:center;

`
const FooterLink = styled.a`
align-self:center;
justify-self: center;
`

export default function Footer() {

    return (
        <FooterCont>
            <FooterLink href={`https://github.com/tomkhcoding`} target='_blank' rel="noreferrer">
                <FooterIcon icon={Git} size='2x'></FooterIcon>
            </FooterLink>
            <FooterCopy>&copy; Tom Knutsen 2021</FooterCopy>
        </FooterCont>
    )
}