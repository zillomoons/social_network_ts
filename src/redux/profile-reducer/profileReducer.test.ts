import {
    addPost,
    ProfileType,
    ProfileInitStateType,
    profileReducer,
    removePost,
    setProfile,
    setStatus
} from "./profileReducer";
import ava_1 from "../../assets/images/ava_1.jpg";
import ava_2 from "../../assets/images/ava_2.jpg";
import ava_3 from "../../assets/images/ava_3.jpg";
import ava_4 from "../../assets/images/ava_4.jpg";
import ava_5 from "../../assets/images/ava_5.jpg";

let initState: ProfileInitStateType;

beforeEach(()=>{
    initState = {
        posts: [
            {id: '1', message: 'Prepare yourself for what may come', likesCount: 45, userImage: ava_1},
            {id: '2', message: "Bazinga! I don't care", likesCount: 5, userImage: ava_2},
            {id: '3', message: 'I am not insane. My mother had me tested', likesCount: 12, userImage: ava_3},
            {id: '4', message: "Here's only one donut left, so wheelchair", likesCount: 3, userImage: ava_4},
            {
                id: '5',
                message: "Are you still depressed, because you're alone and no one loves you?",
                likesCount: 0,
                userImage: ava_5
            },
        ],
        profile : null,
        status: '',
        newPostText: '',
    }
})

test('profile-reducer should add post', ()=> {
    let text = 'the weather is marvelous today'
    const resultState = profileReducer(initState, addPost(text));

    expect(resultState.posts.length).toBe(6);
    expect(resultState.posts[5].likesCount).toBe(0);

})

test('profile-reducer should set new profile', ()=>{
    let profileEx: ProfileType = {
        userId : 154,
        lookingForAJob : true,
        lookingForAJobDescription : 'frontend dev',
        fullName: 'Anna Key',
        aboutMe: '',
        contacts: {
            github : null,
            vk : null,
            facebook : null,
            instagram : null,
            twitter : null,
            website : null,
            youtube : null,
            mainLink : null,
        },
        photos: {
            small : 'null',
            large : 'null',
        }
    }
    const resultState = profileReducer(initState, setProfile(profileEx));

    expect(resultState.profile?.fullName).toBe('Anna Key');
    expect(resultState.profile?.lookingForAJobDescription).toBe('frontend dev');
    expect(resultState.profile?.lookingForAJob).toBe(true);
})

test('profile-reducer should set new status', ()=>{
    let status = "I'm over the moon";
    const resultState = profileReducer(initState, setStatus(status));

    expect(resultState.status).toBe(status);
})
test('profile-reducer should delete post', ()=>{
    let id = '4'
    const resultState = profileReducer(initState, removePost(id));

    expect(resultState.posts.length).toBe(4);
    expect(resultState.posts[3].id).toBe('5')
})