import React from 'react';
import  p from '../Profile.module.css';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';


const Post = (props) => {
    return (
        <div className={p.post}>
            {props.message}
            
                <div className={p.post_description_like}>
                    <BottomNavigationAction label="Favorites"  className={p.like} icon={<FavoriteIcon />} />
                    {props.likeCount}
                    
                </div>
            
        </div>
    );
   
}

export default Post;
