
import './index.css';
import state from './state';
import * as serviceWorker from './serviceWorker'
import {rerenderEntireTree} from './render'

rerenderEntireTree(state);
   
