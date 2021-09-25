import ava_1 from "../../assets/images/ava_1.jpg";
import ava_2 from "../../assets/images/ava_2.jpg";
import ava_3 from "../../assets/images/ava_3.jpg";
import ava_4 from "../../assets/images/ava_4.jpg";
import ava_5 from "../../assets/images/ava_5.jpg";
import ava_6 from "../../assets/images/ava_6.jpg";
import ava_7 from "../../assets/images/logo.jpg";

export type DialogItemType = {
    id: number
    userImage: string
    name: string
    text: string
    time: string
}
export type ContactType = {
    id: number
    name: string
    path: string
    userImage: string
}
export type DialogsPageType = {
    contacts: Array<ContactType>
    dialogItems: Array<DialogItemType>
}
export type PostType = {
    id: number
    message: string
    likesCount: number
    userImage: string
}
export type ProfilePageType = { posts : Array<PostType> }

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export const state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Prepare yourself for what may come', likesCount: 45, userImage: ava_1},
            {id: 2, message: "Bazinga! I don't care", likesCount: 5, userImage: ava_2},
            {id: 3, message: 'I am not insane. My mother had me tested', likesCount: 12, userImage: ava_3},
            {id: 4, message: "Here's only one donut left, so wheelchair", likesCount: 3, userImage: ava_4},
            {id: 5, message: "Are you still depressed, because you're alone and no one loves you?", likesCount: 0, userImage: ava_5},
            // {id: 6, message: 'We are the champions!!', likesCount: 100, userImage: ava_6},
        ]
    },
    dialogsPage: {
        contacts: [
            {id: 1, name: 'Nick', path: '/dialogs/1', userImage: ava_1},
            {id: 2, name: 'John', path: '/dialogs/2', userImage: ava_7 },
            {id: 3, name: 'Max', path: '/dialogs/3', userImage: ava_3},
            {id: 4, name: 'Ann', path: '/dialogs/4', userImage: ava_4},
            {id: 5, name: 'Kate', path: '/dialogs/5', userImage: ava_5},
            {id: 6, name: 'Rupert', path: '/dialogs/6', userImage: ava_6},
        ],
        dialogItems: [
            {id: 1, userImage: ava_1, name: 'Nick', text: 'Hey, wassup?', time: '20.00'},
            {id: 2, userImage: ava_2, name: 'Alex', text: 'alright, and you', time: '20.15'},
            {id: 3, userImage: ava_1, name: 'Nick', text: 'working', time: '20.35'},
            {id: 4, userImage: ava_2, name: 'Alex', text: 'you better be))', time: '21.00'},
        ]
    }

}