
import ButtonList from './ButtonList'
import styled, {ThemeProvider} from 'styled-components'
import { useSidebar } from '../SidebarContext';


const ButtonOverlay = styled.div`
    position:fixed;
    transition: all 1s;
    height: 100vh;
    background-color: black;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    left: ${props => props.theme.left};
    top:50%;
    width:100%;
    grid-area: picture, title;
    z-index:1;
`
export default function MobileNav() {
    const sidebar = useSidebar()
    const theme = sidebar ? 
    {
      left:'50%',
    } : 
  
     {
     left:'-100%' ,
    };
    return (
        
        <>
        <ThemeProvider theme={theme}>
            <ButtonOverlay>
                <ButtonList mobile={true}/>
            </ButtonOverlay>
        </ThemeProvider>
        </>
    )
}