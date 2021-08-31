import {createGlobalStyle} from 'styled-components'


export default createGlobalStyle`
    root{
        box-sizing: border-box;
        
    }

    html {
        font-family: arial;
    }

    body{
        margin: 0;
        overflow-x: hidden;
        overflow-y: hidden;
        position:relative;
        min-height:100vh;
        min-width:100%;
        padding:0;
        background-color: #171717;
    }

    ul {
        margin:1rem;
        padding:1rem;
        list-style-type: none;
      }
`