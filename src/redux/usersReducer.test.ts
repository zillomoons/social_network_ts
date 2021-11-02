import ava_1 from "../assets/images/ava_1.jpg";
import {toggleFollowInProgress, usersReducer, UsersType} from "./usersReducer";

let state: UsersType;

beforeEach(()=>{
    state = {
        users: [{id: 1, name: 'Nick', followed: true, status: "I'm frontdev", photos: {small: ava_1, large: null}},
            {id: 2, name: 'John', followed: true, status: "I'm frontdev", photos: {small: ava_1, large: null}},
            {id: 3, name: 'Max', followed: false, status: "I'm frontdev", photos: {small: ava_1, large: null}},
            {id: 4, name: 'Ann', followed: true, status: "I'm frontdev", photos: {small: ava_1, large: null}},
            {id: 5, name: 'Kate', followed: false, status: "I'm frontdev", photos: {small: ava_1, large: null}},
            {id: 6, name: 'Rupert', followed: true, status: "I'm frontdev", photos: {small: ava_1, large: null}}],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followInProgress: []
    }

})
test('user reducer should change to correct followed value', ()=>{

    const newState: UsersType  = usersReducer(state, {type: 'CHANGE-FOLLOW', userID: 5, follow: true})
    const newState2: UsersType = usersReducer(state, {type: "CHANGE-FOLLOW", userID: 2, follow: false})

    expect(newState.users[4].followed).toBe(true)
    expect(newState.users[0].followed).toBe(true)
    expect(newState.users[2].followed).toBe(false)
    expect(newState2.users[1].followed).toBe(false)

})
test('user reducer should toggle follow in progress', ()=>{
    const newState: UsersType = usersReducer(state, toggleFollowInProgress(true, 6))

    expect(newState.followInProgress.length).toBe(1)
})