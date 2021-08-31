import {NavLink} from 'react-router-dom'
import styled from 'styled-components';


import {MainButton} from './ButtonComponents';

const ButtonCont = styled.div`
display:grid;
padding:0;
margin:0;
align-items:'center';
gap: 25px 0;
margin-top: 20%;
`

const Link = styled(NavLink)`
width:75%;
justify-self:center;
@media (max-width: 769px) {
  padding: 0 1rem;
}
& :hover {
    background-color:rgba(150, 150, 150);
    border-radius: 15px;      
    * {
      text-decoration:underline;
    }
  }

  & .active {
    pointer-events:none;
    user-select:none;
    cursor:default;
  }
  text-decoration:none;
`


export default function ButtonList(props) {
  console.log(props)
    return (
            <ButtonCont >
                  
                  {props.mobile ?<Link exact to ='/'>
                    <MainButton mobile = {props.mobile} text = 'Home'/>
                  </Link>: null}

                  <Link to='/projects'>
                    <MainButton mobile = {props.mobile} text = 'Projects'/>
                  </Link>
                
                  <Link to='/about'>
                    <MainButton mobile = {props.mobile} text = 'About'/>
                  </Link>

                  <Link to='/contact'>
                    <MainButton mobile = {props.mobile} text = 'Contact'/>
                  </Link>
              </ButtonCont>
    )
}