import {useEffect, useState} from 'react'
import {useSidebar, useSidebarUpdate} from '../SidebarContext'
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink} from 'react-router-dom';
// eslint-disable-next-line
import styled, {css} from 'styled-components';

import ProjectDisplay from './ProjectDisplay'
import {ProjectList} from './ButtonComponents';

const Container = styled.div`
    height:90vh;
    width:80vw;
    background-color: blue;
    display: grid; 
        grid-template-columns: 0.5fr 1.5fr 1fr; 
        grid-template-rows: 1fr 1fr 1fr; 
        gap: 15px 15px; 
        grid-template-areas: 
            "list iframe iframe"
            "list iframe iframe"
            "list info infos"; 
`


export default function Projects() {
    // const sidebar = useSidebar()
    // const toggleSidebar =useSidebarUpdate()
    // const [myData,setData] = useState();

    // const getData= async()=>{
    //   try {
    //     const res = await fetch('https://tomkhcoding.github.io/api/projects.json');
    //     const data = await res.json()
    //     console.log(`statResOK: ${res.ok}`)
    //     setData(data)
    //     }
    //   catch (e) { console.log(e) }
    // }
      
    // useEffect(()=>{
    //     getData()
    //     if(!sidebar) { toggleSidebar()}
    //     // console.log(myData)
    //         // eslint-disable-next-line
    //     },[])
  
    // // useEffect(()=>{
    // //     
    // //    //eslint-disable-next-line
    // // },[props.data])
    // // // text ={`${props.data[0].name}`}

    return (
        <ProjectList />
    )
}