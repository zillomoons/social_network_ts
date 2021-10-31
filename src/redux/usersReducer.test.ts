import ava_1 from "../assets/images/ava_1.jpg";
import {usersReducer, UsersType, UserType} from "./usersReducer";
//
// type TestUsersType = {
//     users: UserType[]
// }
// let state: TestUsersType;
//
// beforeEach(()=>{
//     state = {
//         users : [
//             {id: 1, name: 'Nick', followed: true, status: "I'm frontdev", photos: {small: ava_1, large: null}},
//             {id: 2, name: 'John', followed: true, status: "I'm frontdev", photos: {small: ava_1, large: null}},
//             {id: 3, name: 'Max', followed: false, status: "I'm frontdev", photos: {small: ava_1, large: null}},
//             {id: 4, name: 'Ann', followed: true, status: "I'm frontdev", photos: {small: ava_1, large: null}},
//             {id: 5, name: 'Kate', followed: false, status: "I'm frontdev", photos: {small: ava_1, large: null}},
//             {id: 6, name: 'Rupert', followed: true, status: "I'm frontdev", photos: {small: ava_1, large: null}},
//         ]
//     }
//
// })
// test('user reducer should change to correct followed value', ()=>{
//
//     const newState: UsersType  = usersReducer(state, {type: 'CHANGE-FOLLOW', userID: 5})
//     const newState2: UsersType = usersReducer(state, {type: "CHANGE-FOLLOW", userID: 2})
//
//     expect(newState.users[4].followed).toBe(true)
//     expect(newState.users[0].followed).toBe(true)
//     expect(newState.users[2].followed).toBe(false)
//     expect(newState2.users[1].followed).toBe(false)
//
// })