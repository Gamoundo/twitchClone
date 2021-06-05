import React  from "react";

class User extends React.Component {

    state = {
        userName: "Bob",
        followers: 0,
        profilePic: "https://www.tynker.com/projects/screenshot/575088a4588161fe118b4573/derp-face.png"
    }

    render () {
        return(
            <div className="info">
                <div>
                  <img className="image" src={this.state.profilePic} alt="face"/>
                  <p> {this.state.followers} followers</p>
                </div>
                <div>
                   <h1>{this.state.userName}</h1>
                </div>
                

            </div>
        )
    }
}

export default User;

