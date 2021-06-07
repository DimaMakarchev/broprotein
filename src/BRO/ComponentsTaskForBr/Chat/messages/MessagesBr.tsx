import React from "react";
import {Message} from "./Message";

export const MessagesBr: React.FC = () => {
    const messages = [1, 2, 3];


    return (
        <div style={{height:'200px',overflowY:'auto'}}>
            {messages.map((value: any) => <Message/>)}
            {messages.map((value: any) => <Message/>)}
            {messages.map((value: any) => <Message/>)}
            {messages.map((value: any) => <Message/>)}
            {messages.map((value: any) => <Message/>)}
            {messages.map((value: any) => <Message/>)}
        </div>
    )
};
