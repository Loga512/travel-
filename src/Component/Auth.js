import React,{useContext,useState}from 'react'
const Authcontext=React.createContext(null)
export const Auth=({children})=>{
    const[user,setuser]=useState(null)
    const login=(user)=>{
        setuser(user)
    }
    const logout=()=>{
        setuser(null)
    }
    return(
        <div>
            <Authcontext.Provider value={{user,login,logout}}>
                {children}
                </Authcontext.Provider>
                </div>
    )
}
export const useAuth=()=>{
    return useContext(Authcontext)
}