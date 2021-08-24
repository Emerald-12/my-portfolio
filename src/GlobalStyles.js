import {createGlobalStyle} from 'styled-components'


export default createGlobalStyle`
    root{
        box-sizing: border-box;
    }

    body{
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }

    ul {
        margin:1rem;
        padding:1rem;
        list-style-type: none;
      }
`