import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";


const Dialogs = (props) => {
 
    

    let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem image={dialog.image} key={dialog.id} name={dialog.name} link={dialog.id}/>)
    let messagesElements = props.dialogsPage.messagesData.map(m => <MessageItem messageMe={m.messageMe} key={m.id} message={m.message}/>)

    const addMessage=()=>{
        props.addMessage();
    }

    const textMessageChange=(e)=>{
        let text=e.target.value;
        props.textMessageChange(text);
 
        
       
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messagesItems}>
                {messagesElements}
                <div className={s.depress_message}>
                    <textarea placeholder='Напиши собщение' className={s.area_message}  value={props.dialogsPage.newMessageText}
                              onChange={textMessageChange}></textarea>
                    <button className={s.btn_message} onClick={addMessage}>Отправить</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs
