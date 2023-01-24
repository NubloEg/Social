const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT='UPDATE-NEW-MESSAGE-TEXT';


let initialState={
    newMessageText:"",
    dialogsData: [
        {id: 1, image: "https://cdn-icons-png.flaticon.com/512/3048/3048122.png", name: 'Egor'},
        {id: 2, image: "https://cdn-icons-png.flaticon.com/512/3048/3048122.png", name: 'Alex'},
        {id: 3, image: "https://cdn-icons-png.flaticon.com/512/3048/3048122.png", name: 'Kama'},
        {id: 4, image: "https://cdn-icons-png.flaticon.com/512/3048/3048122.png", name: 'Miss V'}
    ],
    messagesData: [
        {id: 1, messageMe:true, message: 'Hi'},
        {id: 2, messageMe:false, message: 'Hi,Egor'},
        {id: 3, messageMe:true, message: 'How are you?'},
        {id: 4, messageMe:false, message: 'Nice'}

    ]
}

 const dialogsReducer = (state=initialState,action)=>{

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:{
            return {
                ...state,
                newMessageText:action.newText
            };
           
            
        }
        case ADD_MESSAGE:{
            let newMessage={
                id: 1,
                messageMe:true,
                message: state.newMessageText
            }
            return {
                ...state,
                messagesData:[...state.messagesData,newMessage],
                newMessageText:""
            };
           
        }
        default:
            return state;
            
    }



    
}
export const addMessageActionCreator=()=>({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator=(text)=>(
    {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
)

export default dialogsReducer;