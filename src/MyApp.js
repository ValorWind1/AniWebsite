import React,{useState , useEffect} from "react"
import Anime from "./components/Anime"
import axios from "axios"

const MyApp =()=> {

    const [anime , setAnime] = useState([]);
    const [pictures , setPictures] = useState([]);

    const headers = {
          'x-rapidapi-key': 'ecf2cd78aamshe6b1fc38f7bf795p1052cajsnca6e52e07661',
          'x-rapidapi-host': 'jikan1.p.rapidapi.com'
        }
      

    useEffect(() => {
        axios.get('https://jikan1.p.rapidapi.com/anime/1/pictures' , {headers})
        .then(response => {setPictures(response.data.pictures)
            
        })
        
    }, [])


   
    // console.log("MyApp",pictures.data.pictures)

    return (
        <div>
        
            <Anime pics={pictures}/>
        </div>
    )
}


export default MyApp