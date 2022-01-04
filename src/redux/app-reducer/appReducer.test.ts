import {appReducer, InitAppType, setAppError} from "./appReducer";

let startState: InitAppType;
beforeEach(()=> {
    startState= {
        initialized: false,
        error: ''
    }
})

test('app reducer should set error', ()=> {
    const endState = appReducer(startState, setAppError('new error'));

    expect(endState.error).toBe('new error')
})