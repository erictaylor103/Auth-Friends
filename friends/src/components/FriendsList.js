import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


class FriendsList extends React.Component {
    state = {
        friends:[]                    
    }


    componentDidMount(){
        this.getData();
    }

    getData = () => {
        
        axiosWithAuth()
            .get("/api/friends")                
            .then(res =>{                
                //console.log(res.data);
                this.setState({
                    friends: res.data
                })
                
            })            
            .catch(err => console.log(err.response));
    }

    render(){
        return(
        <div>
            {
                this.state.friends.map(friend =>{
                    return(
                    <div key={friend.id}>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                        <p>{friend.name}</p>
                    </div>
                    )
                    
                })
            }
        </div>
        )
            
        
    }
}

export default FriendsList;