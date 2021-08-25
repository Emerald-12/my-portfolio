import {createGlobalStyle} from 'styled-components'


export default createGlobalStyle`
    root{
        box-sizing: border-box;
    }

    body{
        margin: 0;
        overflow-x: hidden;
        position:relative;
        min-height:100vh;
        width:100vw;
        padding:0;
        background-color: #171717;
    }

    ul {
        margin:1rem;
        padding:1rem;
        list-style-type: none;
      }
`