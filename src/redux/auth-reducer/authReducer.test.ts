import {AuthDataType, authReducer, setCaptchaURL} from "./authReducer";

let startState: AuthDataType;

beforeEach(()=> {
    startState={
        id: null,
        email: null,
        login: null,
        isAuth: false,
        captchaURL: '',
    }
})
test('auth-reducer should set captcha url', ()=> {
    const url = 'stringCaptchaURL'
    const endState = authReducer(startState, setCaptchaURL(url));

    expect(endState.captchaURL).toBe(url)
})