import {NavLink} from 'react-router-dom'
import styled from 'styled-components';


import {MainButton} from './ButtonComponents';

const Link = styled(NavLink)`
  text-decoration:none;
`
const ListItem = styled.li`
  padding: 1rem;
  @media (max-width: 769px) {
    margin-top:25%;
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
`

export default function ButtonList(props) {
  console.log(props)
    return (
            <ul style={{ padding:'0', margin:'0', alignItems:'center'}}>
                <ListItem>
                  <Link to={props.mobile ? '/projects' : '/projects'}>
                    <MainButton mobile = {props.mobile} text = 'Projects'/>
                  </Link>
                </ListItem>
                
                <ListItem>
                  <Link to={props.mobile ? '/m/about' : '/about'}>
                    <MainButton mobile = {props.mobile} text = 'About'/>
                  </Link>
                </ListItem>

                <ListItem>
                  <Link to={props.mobile ? '/m/cv' : '/cv'}>
                    <MainButton mobile = {props.mobile} text = 'CV'/>
                  </Link>
                </ListItem>

                <ListItem>
                  <Link to={props.mobile ? '/m/contact' : '/contact'}>
                    <MainButton mobile = {props.mobile} text = 'Contact'/>
                  </Link>
                </ListItem>
              </ul>
    )
}