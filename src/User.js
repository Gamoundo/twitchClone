import React  from "react";

class User extends React.Component {

    state = {
        userName: "Bob"
    }

    render () {
        return(
            <div>
                <h1> About {this.state.userName}</h1>
            </div>
        )
    }
}

export default User;

