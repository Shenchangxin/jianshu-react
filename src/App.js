import React,{ Component } from 'react';
import Header from "./common/header";
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
import Register from './pages/register';

class App extends Component {

  render(){
    return (
        //将store提供给呗<Provider></Provider>包裹的组件
        <Provider store={store}>
        <BrowserRouter>
            <div>
            <Header/>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
            <Route path='/register' exact component={Register}></Route>
            </div>
        </BrowserRouter>
        </Provider>
    );
  }

}



export default App;


