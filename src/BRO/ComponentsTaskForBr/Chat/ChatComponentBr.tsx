import React from "react";
import {Chat} from "./ChatBr";


// const webSocket=new WebSocket("wss://echo.websocket.org");
const webSocket=new WebSocket("wss://echo.websocket.org/");
export const ChatComponentBr:React.FC = () => {

    return (
        <>
            <Chat/>
        </>
    )
};


