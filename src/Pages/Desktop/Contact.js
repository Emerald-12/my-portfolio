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
        margin-right: 5rem;
        height: 100%;
    `
    const General = styled.div`
        grid-area: general;
        background-color: #202020;
        color:white;
        padding: 1rem;
        border-radius: 15px;
    `
    const ContactLink = styled.a`
        color: silver;
    `

export default function Contact() {


    return (
        <Container>
            <General>
                <h2>Email:</h2> <ContactLink href="mailto:tom.kodehode@gmail.com">tom.kodehode@gmail.com</ContactLink>
                <h2>LinkedIn:</h2> <ContactLink href="https://www.linkedin.com/in/tom-knutsen-a2a2b021b/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/tom-knutsen-a2a2b021b/</ContactLink>
            </General>
        </Container>
    )
}