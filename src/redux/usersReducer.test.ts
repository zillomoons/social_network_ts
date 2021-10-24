import ava_1 from "../assets/images/ava_1.jpg";
import ava_3 from "../assets/images/ava_3.jpg";
import ava_4 from "../assets/images/ava_4.jpg";
import ava_5 from "../assets/images/ava_5.jpg";
import {usersReducer, UsersType} from "./usersReducer";
import ava_7 from "../assets/images/logo.jpg";
import ava_6 from "../assets/images/ava_6.jpg";

let state: UsersType;

beforeEach(()=>{
    state = {
        users : [
            {id: "1", name: 'Nick', followed: true, city: 'Moscow', userImage: ava_1},
            {id: '2', name: 'John', followed: true, city: 'New York', userImage: ava_7 },
            {id: '3', name: 'Max', followed: false, city: 'Kiev', userImage: ava_3},
            {id: '4', name: 'Ann', followed: true, city: 'Tallinn', userImage: ava_4},
            {id: '5', name: 'Kate', followed: false, city: 'London', userImage: ava_5},
            {id: '6', name: 'Rupert', followed: false, city: 'Edinburgh', userImage: ava_6},
        ]
    }

})
test('user reducer should change to correct followed value', ()=>{

    const newState: UsersType  = usersReducer(state, {type: 'CHANGE-FOLLOW', userID: '5'})
    const newState2: UsersType = usersReducer(state, {type: "CHANGE-FOLLOW", userID: '2'})

    expect(newState.users[4].followed).toBe(true)
    expect(newState.users[0].followed).toBe(true)
    expect(newState.users[2].followed).toBe(false)
    expect(newState2.users[1].followed).toBe(false)

})