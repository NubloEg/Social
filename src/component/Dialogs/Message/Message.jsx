import React from 'react';
import s from './../Dialogs.module.css';
const MessageItem = (props) => {
    return (
        <div className={props.messageMe? s.messageMe:s.messageFriend}>{props.message}</div>
    )
}
export default MessageItem
