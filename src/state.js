import {rerenderEntireTree} from './render'

let state = {
  newPostText:"О чем Вы думаете сейчас?",

   messageOfPeople: [
    {id: 1, name:'Liza  Vasilevskaya' },
    {id: 2, name:'Peleshok Ivan' },
    {id: 3, name:'Ivanov Ivan' }
  ],
  dialogMessages: [
    {message:'Hi  !!!!!!!'},
    {message:'My name is Liza'},
    {message:'Мой парень много пукает!'}
  ],
   posts: [
    {id: 1, message:`ЮРА ВАНИН ЛУЧШИЙ ДРУГ!!!!!!!!!!!!!!!!!
    ____________$$$$$$$$______$$$$$$$$$
    __________$$$$$$$$$$$$__$$$$$$$__$$$$
    _________$$$$$$$$$$$$$$$$$$$$$$$$__$$$
    _________$$$$$$$$$$$$$$$$$$$$$$$$__$$$
    _________$$$$$$$$$$$$$$$$$$$$$$$$__$$$
    __________$$$$$$$$$$$$$$$$$$$$$$__$$$
    ____________$$$$$$$$$$$$$$$$$$$$$$$
    _______________$$$$$$$$$$$$$$$$$
    _________________$$$$$$$$$$$$$
    ____________________$$$$$$$
    ______________________$$$
    _______________________$
    `, likeCount: 12},
    {id: 2, message:`Ваня много пукает!!!`, likeCount: 34}
  ],
  friends: [
    {id: 1, name:'Liza  Vasilevskaya' },
    {id: 2, name:'Peleshok Ivan' },
    {id: 3, name:'Ivanov Ivan' }
  ]
} 
  
export default state;

let addPost = (postMessage) =>{

    let newPost ={

      id:5,
      message:postMessage,
      likeCount: 0
    };
    state.posts.push(newPost);
    updateNewPostText('');
    rerenderEntireTree(state);

 
  }
   let updateNewPostText = (newText) =>{
    state.newPostText= newText;
    rerenderEntireTree(state);
    
  }
export {addPost}
export {updateNewPostText}
