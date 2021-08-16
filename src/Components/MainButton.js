// eslint-disable-next-line
import styled, {css} from 'styled-components';

const Button = styled.button`
    background-color: silver;
    border: none;
    margin: 2rem auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-radius: 15px;
    width: 100%;
    min-width:200px;
    text-decoration:none;

    & :hover, :focus-within{
        text-decoration: underline;
        background-color:rgba(150, 150, 150);
        border-radius: 15px;
    }

    .active & {
        color:white;
        text-decoration: underline;
        background-color:black;
    }
`
function MainButton(props) {
    return(
        <Button><h1>{props.text}</h1></Button>
    )
}

export default MainButton