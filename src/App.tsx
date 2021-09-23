import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Profile} from "./components/profile/Profile";
import {ContactPropsType, Dialogs} from "./components/dIalogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import NewsPage from "./components/NewsPage";
import Music from "./components/Music";
import Settings from "./components/Settings";
import HomePage from "./components/HomePage";
import {PostPropsType} from "./components/profile/myPosts/post/Post";
import {DialogItemPropsType} from "./components/dIalogs/dialogItem/dialogItem";

type AppPropsType = {
    posts: Array<PostPropsType>
    contacts: Array<ContactPropsType>
    dialogItems: Array<DialogItemPropsType>
}

const App = (props: AppPropsType) => {
    // const posts = [
    //     {id: 1, message: 'Are you mad?!!', likesCount: 0, userImage: ava_1},
    //     {id: 2, message: 'The best day of my life', likesCount: 5, userImage: ava_2},
    //     {id: 3, message: 'Be cool!', likesCount: 12, userImage: ava_3},
    //     {id: 4, message: "Here's only one donut left, so wheelchair", likesCount: 3, userImage: ava_4},
    //     {id: 5, message: 'Grumpy freek', likesCount: 0, userImage: ava_5},
    //     {id: 6, message: 'We are the champions!!', likesCount: 100, userImage: ava_6},
    // ]
    // const dialogItems = [
    //     {id: 1, userImage: ava_1, name: 'Nick', text: 'Hey, wassup?', time: '20.00'},
    //     {id: 2, userImage: ava_2, name: 'Alex', text: 'alright, and you', time: '20.15'},
    //     {id: 3, userImage: ava_1, name: 'Nick', text: 'working', time: '20.35'},
    //     {id: 4, userImage: ava_2, name: 'Alex', text: 'you better be))', time: '21.00'},
    // ]
    // const contacts = [
    //     {id: 1, name: 'Nick', path: '/dialogs/1'},
    //     {id: 2, name: 'John', path: '/dialogs/2'},
    //     {id: 3, name: 'Max', path: '/dialogs/3'},
    //     {id: 4, name: 'Ann', path: '/dialogs/4'},
    //     {id: 5, name: 'Kate', path: '/dialogs/5'},
    //     {id: 6, name: 'Rupert', path: '/dialogs/6'},
    // ]

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Route exact path={'/'}><HomePage /></Route>
                <Route exact path={'/profile'}><Profile posts={props.posts} /></Route>
                <Route exact path={'/dialogs'}><Dialogs contacts={props.contacts} dialogItems={props.dialogItems} /></Route>
                <Route exact path={'/news'}><NewsPage /></Route>
                <Route exact path={'/music'}><Music /></Route>
                <Route exact path={'/settings'}><Settings /></Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
