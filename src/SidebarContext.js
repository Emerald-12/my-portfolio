import React, {useContext, useState} from 'react'

const SidebarContext = React.createContext()
const SidebarUpdateContext = React.createContext()

export function useSidebar() {
    return useContext(SidebarContext)
}

export function useSidebarUpdate() {
    return useContext(SidebarUpdateContext)
}

export function SidebarProvider({children}) {
    const [sidebar, setSidebar] = useState(false)

    function toggleSidebar() {
        
        setSidebar(prevSidebar => !prevSidebar)
    }
    return (
        <SidebarUpdateContext.Provider value = {toggleSidebar}>
            <SidebarContext.Provider value= {sidebar}>
                {children}
            </SidebarContext.Provider>
        </SidebarUpdateContext.Provider>
    )
}