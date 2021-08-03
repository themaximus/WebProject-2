import React from "react";
import EditMenuPagesObject from "./EditMenuPagesObject";
import { addPostActionCreator, onImageURLChangeActionCreator, onNameChangeActionCreator, onPostChangeActionCreator, onSectionActionCreator } from "../../../Redux/PostsEditReducer";
import EditEnterText from "./EditEnterText";
import Store from "../../../Redux/ReduxStore";
import { Route } from "react-router-dom";
import PostInside from "../../PostObject/PostInside";


let State = Store.getState();




const EditEnterTextContainer = (props) => {
  let AddPost = (namepost, message, urlimage, section) => {

  Store.dispatch(addPostActionCreator(namepost, message, urlimage, section));
   //namepost, message, urlimage
  // urlimage: urlimage , namepost: namepost , message: message  
  };



  let onPostChange = (message) => {
    Store.dispatch(onPostChangeActionCreator(message));
  }

  let onNameChange = (namepost) => {
    Store.dispatch(onNameChangeActionCreator(namepost));
    //namepost
  }

  let onImageURLChange = (urlimage) => {
    Store.dispatch(onImageURLChangeActionCreator(urlimage));
    //urlimage
  }

  let onSectionChange = (section) => {
    Store.dispatch(onSectionActionCreator(section));
    //section
  }

  let PageName = State.PageList.PageList;

  let objectPage = State.PageList.PageList.map ( m => <EditMenuPagesObject id={m.id} pageName={m.pageName} /> ) ;
  let objectPageOption = State.PageList.PageList.map ( m => <option> {m.pageName} </option> ) ;

  let PostObjectContent = State.PostsEdit.postLinkContent.map (  n =>  <PostInside id={n.id} linkPost={n.linkPost} message={n.message}/> ) ;

  return (
     <EditEnterText PostObjectContent={PostObjectContent} onPostChange={onPostChange}  AddPost={AddPost} onSectionChange={onSectionChange} onImageURLChange={onImageURLChange} onNameChange={onNameChange}  newPostSection={State.PostsEdit.newPostSection} newPostImageURL={State.PostsEdit.newPostImageURL}  newPostName={State.PostsEdit.newPostName} newPostText={State.PostsEdit.newPostText} objectPage={objectPage} PageName={PageName} objectPageOption={objectPageOption}/>
  );
};

export default EditEnterTextContainer;
