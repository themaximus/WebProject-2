import { combineReducers, createStore } from "redux";
import Blender3dPostReducer from "./Blender3dPostReducer";
import PageListReducer from "./PageListReducer";
import PersonalMessage from "./PersonalMessageReducer";
import PostsEditReducer from "./PostsEditReducer";

let reducers = combineReducers({
    PostsEdit: PostsEditReducer,
    Messanger: PersonalMessage,
    PageList: PageListReducer,
    Blender3d: Blender3dPostReducer
});



let Store = createStore(reducers);



export default Store;