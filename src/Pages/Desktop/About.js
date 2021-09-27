import styled from 'styled-components'

import image from '../../Media/Me.jpg'


const Container = styled.div`
        display: grid; 
            grid-template-columns: 1fr 1fr 1fr; 
            grid-template-rows: 1fr 1fr 1fr 1fr; 
            gap: 0px; 
            grid-template-areas:
                ". . ."
                "picture general general"
                "picture general general"
                ". . ."; 
        margin-right: 5rem;
        height: 100%;
    `

const Wrap = styled.div`
    grid-area: general;
    background-color: #202020;
    color:white;
    padding: 1rem;
    border-radius: 15px;
`
const Description = styled.div `
    font-size:16px;
    border-radius:15px;
    color:white;
    font-weight:bold;
    white-space:pre-wrap;
    line-height: 145%;
    /* padding: 1rem; */
`

const Intro = styled.div`
    background-color: #606060;
    padding: 1px 10px;
    border-radius: 15px;
`
const Img = styled.img`
    width: 250px;
    border-radius: 15px;
    align-items: center;
    grid-area: picture;
    margin-left: 5rem;
`

export default function About() {

    return (
        <Container>
            <Img src={image}  alt=''/>
            <Wrap>
                <Intro>
                        <h2>
                            Hei, jeg heter Tom og har alltid vært mye interessert i data og IT gjennom livet<br/> fra bygging og daglig bruk i mine unge år, gjennom programmering på videregående og nå gjennom frontend opplæringen på KodeHode.
                        </h2>
                    </Intro>
                    <Description>
                        <p>
                            Innenfor koding stiller jeg klart sterkest med React og har en forkjærlighet for å ta dypdykk inn i koden for å finne nye og tekniske måter å gjøre ting på, jeg elsker å ta tak i et problem og leke meg med løsninger og sloss litt med språket for å bruke nysgjerrigheten min til å nå best  resultat.
                        </p>
                        <p>
                            Jeg har alltid vært mye fascinert av spill og gjennom bruk av spill og addons/plugins har jeg fostret en interesse for applikasjoner og funksjoner som nå er blitt mitt hovedfokus innen utvikling.
                        </p>
                
                        <p>
                            På fritiden beskrives jeg best som vil jeg beskrive meg selv som en aktiv nerd. Jeg elsker å bruke tiden på gaming og rollespill(tabletop, D&amp;D), jevnlige sosiale sammenkomster og klatring.
                        </p>
                    </Description>
            </Wrap>
        </Container>
    )
}