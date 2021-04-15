import React from 'react';
import v from  './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Nastr  from './components/Nastr/Nastr';
import Friends from './components/Friends/Friends';



const App = (props) => {

  return (
     <BrowserRouter>
      <div  className={v.app_wrapper}>
         <Header /> 
         <Navbar /> 
         <Route path='/profile' render= { ()=> <Profile state={props.state} addPost={props.addPost}  updateNewPostText={ props.updateNewPostText} />} /> 
         <Route path='/dialogs' render= { ()=> <Dialogs state={props.state} />}   />  
         <Route path='/news' component={News} /> 
         <Route path='/music' component={Music} />
         <Route path='/friends' render= { ()=> <Friends state={props.state} />}   />
         <Route path='/settings' component={Nastr} />
         <Footer /> 
      </div>
     </BrowserRouter>
    
    );
}

export default App;