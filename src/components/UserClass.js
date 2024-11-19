import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props)
        // console.log(this.props.name+"child constructor")
        this.state={
            userInfo:{
                name: "dummy",
                location: "default",
                
            }
        }
    }
    async componentDidMount(){
        // console.log(this.props.name+"child compoentn is mount");
        //APi call
       const data=await fetch("https://api.github.com/users/Anudeep2806")
       const json= await data.json();

       this.setState({
        userInfo: json,
       })

       //console.log(json)
    }

    render(){

        const {name,location ,avatar_url}=this.state.userInfo;
        return (
            <div className="user-card">
                <img  src={avatar_url}/>
              <h2>Name: {name}</h2>
              <h3>Location :{location}</h3>
              <h4>Contact : @anudeepreddy</h4>
              {/* {console.log(this.props.name+"child render")} */}
            </div>
          );
    }

}

export default UserClass;