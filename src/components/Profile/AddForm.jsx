import React from 'react';
import  p from './Profile.module.css';

const AddForm = (props) => {

    let newPostElement = React.createRef();
    let addPost = () => {
        let text= newPostElement.current.value;
        props.addPost(text);
    
}
    let onPostChange = (e) => {
       let text= newPostElement.current.value;
       props.updateNewPostText(text);
        
    }
    return (
        <div className = {p.addForm}>
            <input
            ref ={ newPostElement}
            value = {props.state.newPostText}
            className = {p.textarea}
            onChange={onPostChange}  
            />
            <button   className = {p.btn} onClick={addPost}>
                 Добавить пост
            </button>
        </div>
    )
}
export default AddForm;