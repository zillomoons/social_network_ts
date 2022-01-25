import {appReducer, InitAppType, setAppError, setAppStatus} from "./appReducer";

let startState: InitAppType;
beforeEach(()=> {
    startState= {
        initialized: false,
        error: '',
        appStatus: 'idle'
    }
})

test('app reducer should set error', ()=> {
    const endState = appReducer(startState, setAppError('new error'));

    expect(endState.error).toBe('new error')
})
test('app reducer should set correct status', ()=> {
    const endState = appReducer(startState, setAppStatus('loading'));

    expect(endState.appStatus).toBe('loading')
})