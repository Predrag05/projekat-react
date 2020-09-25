import React, { useState, useEffect } from 'react';
import { getMessage } from '../util/service';


const Messages = ({ match }) => {
    const [topicID] = useState(match.params.topic_id);
    const [topic, setTopic] = useState([]);
    useEffect(() => {
        getMessage(topicID).then(data => {
            setTopic(data.messages);
        })
    }, [topicID]);

    return (
        <div className="topic">
            {topic.map(x => {
                return <p >{x.message.toString()}</p>
                   
            })}

        </div>
    )
}
export default Messages;