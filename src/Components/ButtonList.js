import {NavLink} from 'react-router-dom'
import styled from 'styled-components';


import {MainButton} from './ButtonComponents';

const Link = styled(NavLink)`
  text-decoration:none;
`
const ListItem = styled.li`
  padding: 1rem;
  @media (max-width: 769px) {
    margin-top:35%;
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
`

export default function ButtonList(props) {
    return (
            <ul style={{height:'100%'}}>
                <ListItem>
                  <Link to='/projects'>
                    <MainButton mobile = {props.mobile} text = 'Projects'/>
                  </Link>
                </ListItem>
                
                <ListItem>
                  <Link to='/about'>
                    <MainButton mobile = {props.mobile} text = 'About'/>
                  </Link>
                </ListItem>

                <ListItem>
                  <MainButton mobile = {props.mobile} text = 'CV'/>
                </ListItem>

                <ListItem>
                  <Link to='/contact'>
                    <MainButton mobile = {props.mobile} text = 'Contact'/>
                  </Link>
                </ListItem>
              </ul>
    )
}