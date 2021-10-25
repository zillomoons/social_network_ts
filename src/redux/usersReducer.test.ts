
import {usersReducer, UsersType} from "./usersReducer";

let state: UsersType;

beforeEach(()=>{
    state = {
        users : [
        ]
    }

})
test('user reducer should change to correct followed value', ()=>{

    const newState: UsersType  = usersReducer(state, {type: 'CHANGE-FOLLOW', userID: 5})
    const newState2: UsersType = usersReducer(state, {type: "CHANGE-FOLLOW", userID: 2})

    expect(newState.users[4].followed).toBe(true)
    expect(newState.users[0].followed).toBe(true)
    expect(newState.users[2].followed).toBe(false)
    expect(newState2.users[1].followed).toBe(false)

})