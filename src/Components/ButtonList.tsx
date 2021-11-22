import {NavLink} from 'react-router-dom'
import styled from 'styled-components';


import {MainButton} from './ButtonComponents';

const ButtonCont = styled.div`
display:grid;
padding:0;
margin:0;
align-items:'center';
gap: 20% 0;
margin-top: 20%;
align-content: center;
justify-content: center;
height: stretch;
@media (max-width: 769px) {
  height:90vh;
  gap: 10% 0;
  margin-top:0%;
}
`

const Link = styled(NavLink)`
width:75%;
/* justify-self:center; */
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


export default function ButtonList(props: any) {
    return (
            <ButtonCont >
                  
                  {props.mobile ?<Link exact to ='/'>
                    <MainButton mobile = {props.mobile} text = 'Hjem'/>
                  </Link>: null}

                  <Link to='/prosjekt'>
                    <MainButton mobile = {props.mobile} text = 'Prosjekter'/>
                  </Link>
                
                  <Link to='/om-meg'>
                    <MainButton mobile = {props.mobile} text = 'Om meg'/>
                  </Link>

                  <Link to='/kontakt'>
                    <MainButton mobile = {props.mobile} text = 'Kontakt'/>
                  </Link>
              </ButtonCont>
    )
}