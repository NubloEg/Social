const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE="UPDATE_NEW_POST_TEXT"

 let initialState={
    newPostText:"",
    PostsData: [
        {id: 1, message: 'Начало работы с JavaScript', likesCount: 14},
        {id: 2, message: 'Первый день занятий версткой', likesCount: 35},

    ],
     profile: null
}

const profileReducer = (state=initialState,action)=>{
    
    switch (action.type) {
        case ADD_POST:{
            let newPost={
                id: 1,
                message: state.newPostText,
                likesCount: 14
            }
            return{
                ...state,
                PostsData:[newPost,...state.PostsData],
                newPostText:""
            };
          
            
        }
        case UPDATE_NEW_POST_TEXT:{
            return{
                ...state,
                newPostText:action.newText};
            
        } case SET_USER_PROFILE:{
            return{
                ...state,
                profile:action.profile};

        }
        default:
            return state;
            
    }
   
   
}
export const addPostActionCreator=()=>({type: ADD_POST})
export const setUsersProfile=(profile)=>({type: SET_USER_PROFILE,profile})
export const updateNewPostTextActionCreator=(text)=>(
    {type: UPDATE_NEW_POST_TEXT, newText: text}
)

export default profileReducer;