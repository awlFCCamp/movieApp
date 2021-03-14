import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
const AppContext = React.createContext()
console.log(API_ENDPOINT)
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error,setError] = useState({show:false,msg:''});
  const [movies,setMovies] = useState([]);
  const [query,setQuery] = useState('Avengers');

  const fetchMovies = async (url) =>{
    setIsLoading(true);
    try{
      const result = await axios.get(url);
      console.log(result.data.Search)
      if(result.data.Response ==='True'){
        setMovies(result.data.Search)
        setError({show:false,msg:''})
      }else{
        setError({show:true,msg:result.data.error})
      }
      setIsLoading(false)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchMovies(`${API_ENDPOINT}&s=${query}`)
  },[query])
  return <AppContext.Provider value={{isLoading,error,movies,query,setQuery}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
