import {sendMessage} from "./dialogs-reducer/dialogsReducer";
// import { sendMessage, updateMessage } from "./dialogsReducer";
// import { addPostAC, updatePostAC} from "./profileReducer";
//
//
// type DialogItemType = {
//     id: string
//     userImage: string
//     name: string
//     text: string
//     time: string
// }
// type ContactType = {
//     id: string
//     name: string
//     path: string
//     userImage: string
// }
// type DialogsPageType = {
//     contacts: Array<ContactType>
//     dialogItems: Array<DialogItemType>
//     newMessageText: string
// }
// type PostType = {
//     id: string
//     message: string
//     likesCount: number
//     userImage: string
// }
// type ProfilePageType = { posts : PostType[], newPostText: string }
//
// type RootStateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
// }
//
// type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updatePostAC> | ReturnType<typeof sendMessage> | ReturnType<typeof updateMessage>
//
// type StoreType = {
//     _state: RootStateType
//     _callSubscriber: () => void
//     subscribe: (observer: () => void) => void
//     getState: () => RootStateType
//     dispatch: (action: ActionTypes) => void
// }

// export const self_made_store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: v1(), message: 'Prepare yourself for what may come', likesCount: 45, userImage: ava_1},
//                 {id: v1(), message: "Bazinga! I don't care", likesCount: 5, userImage: ava_2},
//                 {id: v1(), message: 'I am not insane. My mother had me tested', likesCount: 12, userImage: ava_3},
//                 {id: v1(), message: "Here's only one donut left, so wheelchair", likesCount: 3, userImage: ava_4},
//                 {id: v1(), message: "Are you still depressed, because you're alone and no one loves you?", likesCount: 0, userImage: ava_5},
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             contacts: [
//                 {id: v1(), name: 'Nick', path: '/dialogs/1', userImage: ava_1},
//                 {id: v1(), name: 'John', path: '/dialogs/2', userImage: ava_7 },
//                 {id: v1(), name: 'Max', path: '/dialogs/3', userImage: ava_3},
//                 {id: v1(), name: 'Ann', path: '/dialogs/4', userImage: ava_4},
//                 {id: v1(), name: 'Kate', path: '/dialogs/5', userImage: ava_5},
//                 {id: v1(), name: 'Rupert', path: '/dialogs/6', userImage: ava_6},
//             ],
//             dialogItems: [
//                 {id: v1(), userImage: ava_1, name: 'Nick', text: 'Hey, wassup?', time: '22.25'},
//                 {id: v1(), userImage: ava_2, name: 'Alex', text: 'alright, and you', time: '23.15'},
//                 {id: v1(), userImage: ava_1, name: 'Nick', text: 'working', time: '23.45'},
//                 {id: v1(), userImage: ava_2, name: 'Alex', text: 'you better be))', time: '01.45'},
//             ],
//             newMessageText: ''
//         }
//     },
//     _callSubscriber(){
//         console.log('state has changed')
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     getState(){
//         return this._state;
//     },
//     dispatch(action){
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._callSubscriber();
//
//     }
// }






