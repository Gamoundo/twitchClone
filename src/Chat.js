import React from 'react'

class Chat extends React.Component {

state = {
    messages: [
        {
            name: "J",
            message: "sup"
         
    } 
],
userName: "Jim"
} 

handleSubmit= (e) => {
    e.preventDefault();
    console.log(e.target.text.value)
    console.log(this.state.userName)
   const chatMessage = {
        name: this.state.userName,
        message: e.target.text.value
    }
    this.setState(prevState =>({
       messages: [...prevState.messages, chatMessage] 
    }))

    
    
    }

    displayMessages =(arr) =>{
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

    
    render() {
        console.log(this.state.messages)
        return(
            <div className="chatbox">
                {this.displayMessages(this.state.messages)}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="text"/>
                    <button type="submit"> Chat</button> 
                </form>
            </div>
        )
    }
    
}

export default Chat;