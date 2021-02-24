import React,{useState , useEffect} from "react"
import axios from "axios"

const MyApp =()=> {

    const [manga , setManga] = useState([])

    const headers = {
          'x-rapidapi-key': 'ecf2cd78aamshe6b1fc38f7bf795p1052cajsnca6e52e07661',
          'x-rapidapi-host': 'jikan1.p.rapidapi.com'
        }
      

    useEffect(() => {
        axios.get('https://jikan1.p.rapidapi.com/manga/2/characters' , {headers}).then(response => {
            setManga(response)
            console.log(manga)
        })
    })
   
    

    return (
        <div>
            hello
        </div>
    )
}


export default MyApp