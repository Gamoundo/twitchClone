import React  from "react";
import ReactPlayer from 'react-player'

class User extends React.Component {

    state = {
        userName: "Bob",
        followers: 0,
        profilePic: "https://www.tynker.com/projects/screenshot/575088a4588161fe118b4573/derp-face.png",
        following: []
    }

    render () {
        return(
            <div >
                
                <div className="video">
                    <ReactPlayer url="https://www.youtube.com/watch?v=aoYEQgG4-JY" />
                </div>
                <div className="info"> 
                <div >
                  <img className="image" src={this.state.profilePic} alt="face"/>
                  <p> {this.state.followers} followers</p>
                </div>
                <div className="about">
                   <h1>{this.state.userName}</h1>
                </div>
                </div>
                
                

            </div>
        )
    }
}

export default User;

