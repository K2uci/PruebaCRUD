import React from 'react'
import { createContext , useState , useEffect} from 'react'

const AllContext = createContext();

function Contexto({ children }) {
    //Variable para cargar todos los usuarios
    const [dataUser,setDataUser] = useState([]);

    //Variable para refrescar si existe alguna actualizacion
    const [refresh,setRefresh] = useState(false)

    useEffect(()=>{
        fetch('http://localhost:3001/loaduser')
        .then(res => res.json())
        .then(data => setDataUser(data))
        .catch(()=>console.error('Server Offline'))
    },[refresh])

    return (
        <AllContext.Provider value={{ dataUser , setDataUser , refresh , setRefresh}}>
            {children}
        </AllContext.Provider>
    )
}

export {AllContext,Contexto}