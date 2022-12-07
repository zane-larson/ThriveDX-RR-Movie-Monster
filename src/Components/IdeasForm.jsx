import React, {useState} from "react"

function IdeasForm(props){
    let [input, setInput] = useState("")

        function handleSubmit(e){
            e.preventDefault()

            props.addIdeas(input)
        }
    return(
        <div>
            <h1>IdeasForm</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setInput(e.target.value)}/>
            <button type="submit">Submit your Idea!</button>
            </form>
            
        </div>
        
    )
}

export default IdeasForm