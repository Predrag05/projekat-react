import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getTopics } from '../util/service';


const Topicslist = () => {

    const [topics, setTopics] = useState([])

    useEffect(() => {
        getTopics().then(data => {
            setTopics(data.topics)
        })
    }, [])
    return (
        <div className="topic">
            {topics.map(x => {
                return <div>
                    {x.title.toString()}

                </div>
            })}

        </div>
    )
}

export default Topicslist