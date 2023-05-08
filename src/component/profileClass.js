import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
      componentDidMount(){
        {/**make api calls here */}
      }
      componentWillUnmount(){
    {/**
        unmount the component  */}
      }
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default Profile;