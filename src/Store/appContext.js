import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'


export const Context = createContext(null)


const UserProvider = ({children}) => {
    const [api, setApi] = useState([])

  useEffect(() =>{
    
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=50b67c9cadfb733156f12d50929480d5')
    .then((ap) => {
      setApi(ap.data.results)
      console.log(ap.data.results)
    })
  }, [])


    return (
      <Context.Provider value={{api}}>
        {children}
      </Context.Provider>
    );
  };

  
//exportamos el proveedor
export default UserProvider