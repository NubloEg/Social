import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const MESSAGE_ME='messageMe';
const MESSAGE_Friend='messageFriend';



let store={
    _state : {
        profilePage: {
            newPostText:"",
            PostsData: [
                {id: 1, message: 'Начало работы с JavaScript', likesCount: 14},
                {id: 2, message: 'Первый день занятий версткой', likesCount: 35},

            ]
        },
        dialogsPage: {
            newMessageText:"",
            dialogsData: [
                {id: 1, image: "https://cdn-icons-png.flaticon.com/512/3048/3048122.png", name: 'Egor'},
                {id: 2, image: "https://cdn-icons-png.flaticon.com/512/3048/3048122.png", name: 'Alex'},
                {id: 3, image: "https://cdn-icons-png.flaticon.com/512/3048/3048122.png", name: 'Kama'},
                {id: 4, image: "https://cdn-icons-png.flaticon.com/512/3048/3048122.png", name: 'Miss V'}
            ],
            messagesData: [
                {id: 1, type: {MESSAGE_ME}, message: 'Hi'},
                {id: 2, type: {MESSAGE_Friend}, message: 'Hi,Egor'},
                {id: 3, type: {MESSAGE_ME}, message: 'How are you?'},
                {id: 4, type: {MESSAGE_Friend}, message: 'Nice'}

            ]
        },
        sidebar:{}
    },
    _renderTree(){
    },
    getState(){
        return this._state;
    },
    subscribe(observe){
        this._renderTree=observe;
    },
    dispatch(action){
        
        this._state.profilePage=profileReducer(this._state.profilePage,action);
        this._state.sidebar=sidebarReducer(this._state.sidebar,action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action);

        this._renderTree(this._state);
    }

}






export default store