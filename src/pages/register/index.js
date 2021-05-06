import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {RegisterWrapper,RegisterBox,Input,Button} from './style';
import {actionCreators} from './store';

class Register extends PureComponent {
    render(){
        const {register,registerStatus} = this.props; //dom通过props接受从state里去除的数据
        return (

            <RegisterWrapper>
                <RegisterBox>
                    <Input placeholder='账号' innerRef={(input) => {this.account = input}}/>
                    <Input placeholder='密码' type='password' innerRef={(input) => {this.password = input}}/>
                    <Input placeholder='邮箱' type='email' innerRef={(input) => {this.email = input}}/>
                    <Button onClick={() => register(this.account,this.password,this.email)}>注册</Button>
                    {
                        registerStatus ?  <Redirect to='/login'/> : null
                    }
                </RegisterBox>
            </RegisterWrapper>
        )


    }
}


const mapState = (state) => ({
    registerStatus: state.getIn(['register','register']),//从state中取出所需要的数据

});
const mapDispatch = (dispatch) => ({
    register(accountElem,passwordElem,emailElem) {
        dispatch(actionCreators.register(accountElem,passwordElem,emailElem));
    }
});


export default connect(mapState,mapDispatch)(Register);