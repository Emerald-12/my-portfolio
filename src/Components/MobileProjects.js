// eslint-disable-next-line
import styled from "styled-components";
import { useFetch } from 'react-async';


const Container = styled.div`
    max-width: 100vw;
    padding-top:3rem;
    color:white;   
    height:min-content; 
`

const Image = styled.img`
    height:600px;
    align-self:center;
    justify-self:center;
    border-radius: 5px;
    max-width: 90%;
    padding: 10px;
`

const Wrap = styled.div`
    margin:5rem 25px;
    background-color: #252525;
    border-radius:15px;
`
const Description = styled.div`
        font-size:1.1rem;
        border-radius:15px;
        color:white;
        font-weight:bold;
        white-space:pre-wrap;
        padding: 10px 0 10px 10px;
    
        a{
            color:white;
            text-decoration: underline;
        }
`

export default function MProjects() {
    const Projects = () => {
        const { data, error } = useFetch(`https://tomkhcoding.github.io/api/projects/projects.json`, {
            headers: { accept: "application/json" },
        })
        if (error) return error.message
        if (data)
            return (

                <Container>

                    {data.slice(0, 5).map(data =>
                        <Wrap key={data.id}>
                            <Description >
                                {data.descriptionNo ? <p>{data.descriptionNo}</p> : <p>Nye prosjekter kommer her fortløpende</p>}
                            </Description>

                            {data.screenshot ? <p style={{ textAlign: "center", margin: "0", width: "100%" }}><Image src={data.screenshot} alt=""></Image></p> : null}
                            
                            {data.descriptionNo ? 
                            <Description >
                                <p>Prosjektet er tilgjengelig i sin nåværende tilstand her:<br /> <br /><a href={`${data.url}`} target='_blank' rel="noreferrer">{data.url}</a></p>
                                <p>Koden til prosjektet kan finnes her: <br/><br/><a href={`${data.codeUrl}`} target='_blank' rel="noreferrer">{data.codeUrl}</a></p>
                            </Description> : null}
                        </Wrap>
                    )
                    }
                </Container>
            )
        return null
    }

    return (<Projects />)
}