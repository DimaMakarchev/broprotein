import React from "react";

export const Message: React.FC = () => {
    const message = {
        url: 'https://i.pravatar.cc/30',
        author: 'Dmitry',
        text: 'OK brooooooo'
    };

    return (
        <div>
           <img src={message.url} alt={'ok'}/>  <b>{message.author}</b>
            <hr/>
            {message.text}
            <hr/>
        </div>
    )
};
