import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'


export const Context = createContext(null)


const UserProvider = ({children}) => {
    const [api, setApi] = useState([])
    const [favoritos, setFavoritos] = useState([])

  useEffect(() =>{
    
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=50b67c9cadfb733156f12d50929480d5')
    .then((ap) => {
      setApi(ap.data.results)
    })
  }, [])
  
  const agregarAFavoritos = (id) => {
    let pusheable = api.filter(peli => peli.id == id)
    setFavoritos([pusheable, ...favoritos])
    console.log(favoritos);
  }
  

    return (
      <Context.Provider value={{api, agregarAFavoritos, favoritos}}>
        {children}
      </Context.Provider>
    );
  };

  
//exportamos el proveedor
export default UserProvider