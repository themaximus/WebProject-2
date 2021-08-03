import Store from "../../../Redux/ReduxStore";
import PostInside from "./PostInside";


let State = Store.getState();


const PostInsideContainer = () => {



return (

    <PostInside DialogueList={Store.Messanger.DialogueList} PageList={State.PageList.PageList} />

)

}

export default PostInsideContainer;