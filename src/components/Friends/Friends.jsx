import React from 'react';
import  s from './Friends.module.scss';

const FriendsComponent= (props) => {
  return (
    <div className={s.friendsItem}>
        {props.name}
    </div>
  )
}

const Friends = (props) => {

     let friends = props.state.friends.map (p=> ( 
        <FriendsComponent name={p.name}  />
    ));


  return (
    <div >
         {friends} 
       
    </div>
  )
}

export default Friends ;