import React from "react"
import Pictures from "./Pictures"

const Manga = (props) => {


    
    
    return (

        <div>
        <button onClick={props.buttoni}>These are your animes</button>
        <h1>Title : CowboyBeebBoop</h1>
        <Pictures src={props.src}/>
        
        <hr />
        <h1>Title : CowboyBeebBoop</h1>
        <Pictures src={props.src}/>
        
        <hr />
        <h1>Title : CowboyBeebBoop</h1>
        <Pictures src={props.src}/>
        
        </div>
    )
}



export default Manga