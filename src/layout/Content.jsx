import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Register from '../components/Register';
import List from '../components/TopicList';
import Messages from '../components/Messages';

const Content = ({setUser, user}) =>{
    return(
        <div>
            <Switch>
                <Route exact path='/' component={(props) => <Register setUser={setUser} {...props} />} />                      
                <Route path='/topics' component={List}></Route>
                <Route path='/topic/:topic_id' component={(props) => <Messages setUser={setUser} user={user} {...props}/>}></Route>
            </Switch>
        </div>
    )
}
export default Content;