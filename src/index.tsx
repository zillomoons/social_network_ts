import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ava_1 from "./assets/images/ava_1.jpg";
import ava_2 from "./assets/images/ava_2.jpg";
import ava_3 from "./assets/images/ava_3.jpg";
import ava_4 from "./assets/images/ava_4.jpg";
import ava_5 from "./assets/images/ava_5.jpg";
import ava_6 from "./assets/images/ava_6.jpg";

const data = {
    posts: [
        {id: 1, message: 'Are you mad?!!', likesCount: 0, userImage: ava_1},
        {id: 2, message: 'The best day of my life', likesCount: 5, userImage: ava_2},
        {id: 3, message: 'Be cool!', likesCount: 12, userImage: ava_3},
        {id: 4, message: "Here's only one donut left, so wheelchair", likesCount: 3, userImage: ava_4},
        {id: 5, message: 'Grumpy freek', likesCount: 0, userImage: ava_5},
        {id: 6, message: 'We are the champions!!', likesCount: 100, userImage: ava_6},
    ],
    contacts: [
        {id: 1, name: 'Nick', path: '/dialogs/1'},
        {id: 2, name: 'John', path: '/dialogs/2'},
        {id: 3, name: 'Max', path: '/dialogs/3'},
        {id: 4, name: 'Ann', path: '/dialogs/4'},
        {id: 5, name: 'Kate', path: '/dialogs/5'},
        {id: 6, name: 'Rupert', path: '/dialogs/6'},
    ],
    dialogItems: [
        {id: 1, userImage: ava_1, name: 'Nick', text: 'Hey, wassup?', time: '20.00'},
        {id: 2, userImage: ava_2, name: 'Alex', text: 'alright, and you', time: '20.15'},
        {id: 3, userImage: ava_1, name: 'Nick', text: 'working', time: '20.35'},
        {id: 4, userImage: ava_2, name: 'Alex', text: 'you better be))', time: '21.00'},
    ]
}

ReactDOM.render(
  <React.StrictMode>
    <App posts={data.posts} contacts={data.contacts} dialogItems={data.dialogItems}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
