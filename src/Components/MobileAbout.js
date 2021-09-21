import styled from 'styled-components';

const Container = styled.div`
    max-width: 100vw;
    padding-top:3rem;
    color:white;
    min-height:100vh;   
    max-height:min-content; 
    margin-bottom: 5rem;
`
const Wrap = styled.div`
    margin: 5rem 25px;
    background-color: #252525;
    border-radius:15px;
    font-size: 1.5rem;
    font-weight:bold;
`
const Description = styled.div `
    font-size:14px;
    border-radius:15px;
    color:white;
    font-weight:bold;
    white-space:pre-wrap;
`

const Intro = styled.div`
    background-color: #606060;
    padding: 10px 10px;
    border-radius: 15px;
`


export default function MAbout() {
    return (
        <Container>
            <Wrap>
                <Intro>
                    <p>
                        Hei, jeg heter Tom og har alltid vært mye interessert i data og IT gjennom livet<br/> fra bygging og daglig bruk i mine unge år, gjennom programmering på videregående og nå gjennom frontend opplæringen på KodeHode.
                    </p>
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