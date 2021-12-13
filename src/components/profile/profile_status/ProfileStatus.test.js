import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import {ProfileStatus} from "./ProfileStatus";
import {useState, useEffect} from "react";
// import {unmountComponentAtNode, render} from "react-dom";


const updateStatus = jest.fn();

describe('ProfileStatus component', () => {
    it('ProfileStatus renders', () => {
        render(<ProfileStatus status='Learn react testing' updateStatus={updateStatus}/>)

        expect(screen.getByText(/react/)).toBeInTheDocument();
    });

})
// let container = null;
// beforeEach(()=>{
//     container = document.createElement('div');
//     document.body.appendChild(container);
// });
// afterEach(()=>{
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
// })