import React from 'react';
import AddForm from './AddForm';
import Ava from './Ava';
import Description from './Description';
import MyPost from './Posts/MyPost';
import  p from './Profile.module.css';

const Profile = (props) => {

  return (
    <div className={p.content}>
   
      <div className={p.ava_description}>
        <Ava />
        <Description />
      </div>
      <AddForm addPost={props.addPost} state={props.state}  updateNewPostText={ props.updateNewPostText}/>
      <MyPost state={props.state}  /> 
     
    </div>
  )
}

export default Profile;