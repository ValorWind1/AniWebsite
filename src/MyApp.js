import React,{useState , useEffect} from "react"
import Anime from "./components/Anime"
import axios from "axios"

const MyApp =()=> {

    const [anime , setAnime] = useState([]);
    const [pictures , setPictures] = useState([]);
    const [smallPictures , setSmallPictures] = useState("https://cdn.myanimelist.net/images/anime/12/19609.jpg");

    const headers = {
          'x-rapidapi-key': 'ecf2cd78aamshe6b1fc38f7bf795p1052cajsnca6e52e07661',
          'x-rapidapi-host': 'jikan1.p.rapidapi.com'
        }
      




    useEffect(() => {
        let n = Math.floor(Math.random() * 4710)
        fetch(`https://jikan1.p.rapidapi.com/anime/${n}/pictures`, {headers})
        .then((response) => response.json())
        .then((data) => {setPictures(data.pictures)        
        
        })
        .catch(error => console.log(error))
       
    }, [])

 
    console.log(pictures)

    const picturesSRC = (event) => {
        event.preventDefault();
        const randoImage = Math.floor(Math.random() * pictures.length) 
        const pics =  pictures[randoImage].small
        setSmallPictures({smallPictures: pics})
        console.log("SMALL PICS",smallPictures.smallPictures)          
        }
   
    return (
        <div>           
            <Anime src={smallPictures.smallPictures} buttoni={picturesSRC}/>
        </div>
    )
}


export default MyApp