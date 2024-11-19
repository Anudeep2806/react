import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component{

    constructor (props){
        super(props)
        //console.log("construcutor parent")
    }
    componentDidMount(){
        //console.log("parent mount")
    }

    render (){
        return (
            <div>
              <h1>About</h1>
              <div>
                Logged In User
                <UserContext.Consumer>
                  { ({loggedInUser})=> 
                      <h1 className="font-serif font-bold ">{loggedInUser}</h1>
                  }
                </UserContext.Consumer>
              </div>
              <h2>This is about page</h2>
              <UserClass name={"anudeep class"}/>
            </div>
          );

    }
}


export default About;
