import {useSidebar} from '../SidebarContext'
import styled, {ThemeProvider} from 'styled-components';


import Title from './Title'
import Picture from './Picture'
import ButtonList from './ButtonList';


const NavContainer = styled.div`
  position: absolute;
  top:0;
  text-align: center;
  width:300px;
  ${props => props.theme}
  transition: all 1s;
  height:fill;
  padding-top:5rem;
`


function Nav() {
    const sidebar = useSidebar()
    const theme = sidebar ? {left: '0%'} : {left:'40%'}

    
    
    return (
      <ThemeProvider theme ={theme}>
        <NavContainer >
          <Picture />
          <Title />
          <ButtonList mobile={false}/>
        </NavContainer>
      </ThemeProvider>
    )
}
export default Nav