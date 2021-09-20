import styled from 'styled-components'

const Container = styled.div`
display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr 1fr; 
    gap: 0px; 
    grid-template-areas:
        ". . ."
        ". general general"
        ". general general"
        ". . ."; 

height: 100%;
`
const General = styled.div`
grid-area: general;
background-color: #202020;
color:white;
padding: 1rem;
border-radius: 15px;
`

export default function About() {

    return (
        <Container>
            <General>
                <h2>Junior dev</h2>
            </General>
        </Container>
    )
}