import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriend from '../components/AddFriend';

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

            <div>
                <AddFriend />
            </div>

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
            
        </div>     
        )
            
        
    }
}

export default FriendsList;