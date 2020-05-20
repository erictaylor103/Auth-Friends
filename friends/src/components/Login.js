import React from "react";
import axios from 'axios';

class Login extends React.Component{

    state = {
        credentials: {
          username: "Lambda School",
          password: "i<3Lambd4"
        }
      };
    
      handleChange = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        
        });
      };

      login = e => {
          e.preventDefault();
          
          axios.post('http://localhost:5000/api/login', this.state.credentials)
            .then(res =>{
                //console.log(res);
                //res.data.payload -- this is what we get from the console.log
                localStorage.setItem("token", res.data.payload)
                this.props.history.push("/protected"); //this will direct us to the protected route
                
            })
            .catch(err => console.log(err));
      };

    render(){
        return(
            <div>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"                        
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        
                    />
                    <input
                        type="password"
                        name="password"                        
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        
                    />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}

export default Login;