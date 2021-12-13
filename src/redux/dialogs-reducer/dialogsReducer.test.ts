import {addContact, DialogsInitStateType, dialogsReducer, editMessage, removeMessage, sendMessage} from "./dialogsReducer";
import ava_1 from "../../assets/images/ava_1.jpg";
import ava_7 from "../../assets/images/logo.jpg";
import ava_3 from "../../assets/images/ava_3.jpg";
import ava_4 from "../../assets/images/ava_4.jpg";
import ava_5 from "../../assets/images/ava_5.jpg";
import ava_6 from "../../assets/images/ava_6.jpg";
import ava_2 from "../../assets/images/ava_2.jpg";

let initState: DialogsInitStateType;

beforeEach(()=>{
    initState={
        contacts: [
            {id: "1", name: 'Nick', path: '/dialogs/1', userImage: ava_1},
            {id: '2', name: 'John', path: '/dialogs/2', userImage: ava_7 },
            {id: '3', name: 'Max', path: '/dialogs/3', userImage: ava_3},
            {id: '4', name: 'Ann', path: '/dialogs/4', userImage: ava_4},
            {id: '5', name: 'Kate', path: '/dialogs/5', userImage: ava_5},
            {id: '6', name: 'Rupert', path: '/dialogs/6', userImage: ava_6},
        ],
        dialogItems: [
            {id: '1', userImage: ava_1, name: 'Nick', text: 'Hey, wassup?', time: '22.25'},
            {id: '2', userImage: ava_2, name: 'Alex', text: 'alright, and you', time: '23.15'},
            {id: '3', userImage: ava_1, name: 'Nick', text: 'working', time: '23.45'},
            {id: '4', userImage: ava_2, name: 'Alex', text: 'you better be))', time: '01.45'},
        ],
        newMessageText: ''
    }

})
test('dialogs-reducer should add new message', ()=>{
    let message = 'how do you do mon ami?'

    const resultState = dialogsReducer(initState, sendMessage(message));

    expect(resultState.dialogItems.length).toBe(5);
})
test('dialogs-reducer should delete correct message', ()=>{
    let id = '3'
    const resultState = dialogsReducer(initState, removeMessage(id));

    expect(resultState.dialogItems.length).toBe(3);
    expect(resultState.dialogItems[2].id).toBe('4');
})
test('dialogs-reducer should edit correct message', ()=>{
    let text = 'Edited message';
    let id = '2';
    const resultState = dialogsReducer(initState, editMessage(id, text));

    expect(resultState.dialogItems[1].text.length).toBe(14);
    expect(resultState.dialogItems[1].text).toBe(text);
})
test('dialogs-reducer should add new contact', ()=>{
    const resultState = dialogsReducer(initState, addContact('7', "Alice", '',''));

    expect(resultState.contacts.length).toBe(7)
})