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
`

const Wrap = styled.div`
    margin:5rem 25px;
    background-color: #252525;
    border-radius:15px;
`
const Description = styled.div`
        font-size:14px;
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
                        <Wrap>
                            <Description >
                                { data.description ? <p>{data.description}</p> : <p>Make a new project to insert here</p>}
                            </Description>

                            { data.screenshot ? <p style={{ textAlign: "center", margin: "0", width: "100%" }}><Image src={data.screenshot} alt=""></Image></p> : null}
                            <Description ><p>The Project is available, in it's current state, here:<br /> <br /><a href={`${data.url}`} target='_blank' rel="noreferrer">tomkhcoding.github.io/pokemon-search</a></p></Description>
                        </Wrap>
                    )
                    }
                </Container>
            )
        return null
    }

    return (<Projects />)
}