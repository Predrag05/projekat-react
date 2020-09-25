import React, { useState, useEffect } from 'react';
import { getMessage } from '../util/service';

const Topic = ({ history, topicID, topic }) => {

    const [topics, setTopics] = useState('')
    console.log(topics)
    useEffect(() => {
        getMessage(topicID)
            .then(data => {
                if (data.success) {
                    return;
                }
                setTopics(data.messages.topic_id);
            })
    }, [topicID]);

    return (
        <>
            <p onClick={() => {
                history.push(`/topic/${topicID}`);
            }} >{topic}</p>
        </>
    )
}
export default Topic;