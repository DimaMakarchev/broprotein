import React from "react";
import {AddMessagesForm} from "./addmessagesform/AddMessagesForm";
import { MessagesBr } from "./messages/MessagesBr";

export const Chat: React.FC = () => {
    return (
        <div>
            <MessagesBr/>
            <AddMessagesForm/>
        </div>
    )
};
