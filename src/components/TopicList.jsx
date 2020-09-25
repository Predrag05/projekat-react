import React from 'react';
import Topic from './Topic';

import { getTopics } from '../util/service';
import { useState } from 'react';
import { useEffect } from 'react';

const List = ({history}) => {

    const [topic, setTopic] = useState([]);

    useEffect(() => {
        getTopics().then(data => {  
            setTopic(data.topics);
        })
    },[]);

    return (
        <div className="topic">
            {topic.map(e=>{
                return <Topic  topic={e.title.toString()} topicID={e.topic_id} history={history}/> 
            })}
         
        </div>
    )
}

export default List;