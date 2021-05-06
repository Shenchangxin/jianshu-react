import axios from 'axios';
import * as constants from './constants';

const registerSuccess = (user) => ({ //创建action
    type: constants.REGISTER_SUCCESS, //指定action的类型
    user: user,
});
const registerFailure = () => ({
    type: constants.REGISTER_FAILURE,
});

export const register = (account,password,email) => {
    let user = {
        account: account,
        password: password,
        email: email
    };
    return (dispatch) => {
        axios.post('user/register',user).then((res) => {
            if(res.status == 200 || res.status ==0){
                dispatch(registerSuccess(user)); //将action派发给reducer
            }
        }).catch(() => {
            dispatch(registerFailure());
            alert("注册失败");
        });
    }
};