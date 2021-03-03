import React from "react"
import Pictures from "./Pictures"

const Manga = (props) => {


    
    
    return (

        <div>
        <h1>Title : CowboyBeebBoop</h1>
        <Pictures src={props.src}/>
        <button onClick={props.buttoni}>Randomize it</button>
        <hr />
        <h1>Title : CowboyBeebBoop</h1>
        <Pictures src={props.src}/>
        <button onClick={props.buttoni}>Randomize it</button>
        <hr />
        <h1>Title : CowboyBeebBoop</h1>
        <Pictures src={props.src}/>
        <button onClick={props.buttoni}>Randomize it</button>
        </div>
    )
}



export default Manga