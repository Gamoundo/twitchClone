import React from 'react'

const messages = [
    {
        name: "J",
        message: "sup"
     
}
]

const displayMessages =(arr) =>{
    return(arr.map((chatter) => {
        return (
            <div>
                <p className="chat">{chatter.name}: {chatter.message} </p>
            </div>
            
        )
    }
    )
    )
}
function Chat() {
    return(
        <div className="chatbox">
            {displayMessages(messages)}
            <form>
                <input type="text"/>
                <button type="submit"> Chat</button> 
            </form>
        </div>
    )
}

export default Chat;