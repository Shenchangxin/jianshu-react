import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS ({
    username: '',
    password: '',
    email: '',
    register: false
});


export default (state = defaultState,action) => {
    switch (action.type) {
        case constants.REGISTER_SUCCESS:  //通过判断action的类型来对顶层state进行更新
            return state.merge({
                username: fromJS(action.user.username),
                password: fromJS(action.user.password),
                email: fromJS(action.user.email),
                register: true
            });
        case constants.REGISTER_FAILURE:
            return null;
        default:
            return state;
    }

}