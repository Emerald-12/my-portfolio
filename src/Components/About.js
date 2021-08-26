import styled from 'styled-components'

export default function About() {

    const Container = styled.div`
        display: grid; 
            grid-template-columns: 1fr 1fr 1fr; 
            grid-template-rows: 1fr 1fr 1fr; 
            gap: 0px; 
            grid-template-areas: 
                ". general general"
                ". general general"
                ". . ."; 
        margin-right:1rem;
        width:100%;

    `
    const General = styled.div`
        grid-area: general;
        background-color: #202020;
        color:white;
        padding: 1rem;
    `

    return (
        <Container>
            <General>
                I am a web developer in training
            </General>
        </Container>
    )
}