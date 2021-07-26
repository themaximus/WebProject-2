const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_POST_NAME = 'UPDATE-NEW-POST-NAME';
const UPDATE_NEW_POST_IMAGE_URL = 'UPDATE-NEW-POST-IMAGE-URL';
const UPDATE_NEW_SECTION = 'UPDATE-NEW-SECTION';
 
 
let InitialState = {
  
     
    posts: [ { id:'2', namepost:'Монеточка как эталон красоты', message:'Когда нибудь седержимое этого поста окажется в необходимом Максиму месте. Конкретного времени и даты этого события знать нельзя, но главное что оно есть. Получилось)', urlimage:'https://i.ibb.co/h2nLWQ0/1231-1.png', section: 'Фан-клуб Монеточки' },
    ],

    postsBlender3d: [
      
    ],
    postsArticle: [
      
    ],

 newPostText:'',
 newPostName:'',
 newPostImageURL:'',
 newPostSection: '',
 
};


const PostsEditReducer = (PostsEdit = InitialState, action) => {

//   switch(action.type) {
//     case ADD_POST:
//       let newPost = {
//         id:3,
//         namepost: action.namepost,
//         message: action.message,
//         urlimage: action.urlimage,
//         section: action.section
//   };
//         PostsEdit.posts.push(newPost);
//         PostsEdit.newPostText = '';
//         PostsEdit.newPostName = '';
//         PostsEdit.newPostImageURL = '';
//         PostsEdit.newPostSection = '';
//         return PostsEdit;
    
//     case ADD_POST_BLENDER3D:
//       let newPostBlender3d = {
//         id:3,
//         namepost: action.namepost,
//         message: action.message,
//         urlimage: action.urlimage,
//         section: action.section
//   };
//         PostsEdit.postsBlender3d.push(newPostBlender3d);
//         PostsEdit.newPostText = '';
//         PostsEdit.newPostName = '';
//         PostsEdit.newPostImageURL = '';
//         PostsEdit.newPostSection = '';
//         return PostsEdit;

//     case UPDATE_NEW_POST_TEXT:
//         PostsEdit.newPostText = action.message;
//         return PostsEdit;
//     case UPDATE_NEW_POST_NAME:
//         PostsEdit.newPostName = action.namepost;
//         return PostsEdit;
//     case UPDATE_NEW_POST_IMAGE_URL:
//         PostsEdit.newPostImageURL = action.urlimage;
//         return PostsEdit;
//     case UPDATE_NEW_SECTION:
//         PostsEdit.newPostSection = action.section;
//         return PostsEdit;
//     default:
//       return PostsEdit;
// },

if ((PostsEdit.newPostSection === 'BLENDER3D') && (action.type === ADD_POST))  {
  let newPostBlender3d = {
    id:3,
    namepost: action.namepost,
    message: action.message,
    urlimage: action.urlimage,
    section: action.section
};
let newPost = {
  id:3,
  namepost: action.namepost,
  message: action.message,
  urlimage: action.urlimage,
  section: action.section
};
  PostsEdit.posts.push(newPost);
    PostsEdit.postsBlender3d.push(newPostBlender3d);
    PostsEdit.newPostText = '';
    PostsEdit.newPostName = '';
    PostsEdit.newPostImageURL = '';
    PostsEdit.newPostSection = '';
    return PostsEdit;
} else if ((PostsEdit.newPostSection === 'Статьи') && (action.type === ADD_POST)) {
  let newPostArticle = {
    id:3,
    namepost: action.namepost,
    message: action.message,
    urlimage: action.urlimage,
    section: action.section
};
let newPost = {
  id:3,
  namepost: action.namepost,
  message: action.message,
  urlimage: action.urlimage,
  section: action.section
};
  PostsEdit.posts.push(newPost);
    PostsEdit.postsArticle.push(newPostArticle);
    PostsEdit.newPostText = '';
    PostsEdit.newPostName = '';
    PostsEdit.newPostImageURL = '';
    PostsEdit.newPostSection = '';
    return PostsEdit;
} else if (action.type === ADD_POST) {
  let newPost = {
    id:3,
    namepost: action.namepost,
    message: action.message,
    urlimage: action.urlimage,
    section: action.section
};
    PostsEdit.posts.push(newPost);
    PostsEdit.newPostText = '';
    PostsEdit.newPostName = '';
    PostsEdit.newPostImageURL = '';
    PostsEdit.newPostSection = '';
    return PostsEdit;
    
} else if (action.type === UPDATE_NEW_POST_TEXT) {
  PostsEdit.newPostText = action.message;
        return PostsEdit;
} else if (action.type === UPDATE_NEW_POST_NAME) {
  PostsEdit.newPostName = action.namepost;
  return PostsEdit;
} else if (action.type === UPDATE_NEW_POST_IMAGE_URL) {
  PostsEdit.newPostImageURL = action.urlimage;
  return PostsEdit;
} else if (action.type === UPDATE_NEW_SECTION) {
  PostsEdit.newPostSection = action.section;
  return PostsEdit;
}

return  PostsEdit;
   
}

export let addPostActionCreator = (namepost, message, urlimage, section) => {
    return {
      type: 'ADD_POST',urlimage: urlimage , namepost: namepost , message: message , section: section
    }
  }

  export let addPostBlender3dActionCreator = (namepost, message, urlimage, section) => {
    return {
      type: 'ADD-POST-BLENDER3D',urlimage: urlimage , namepost: namepost , message: message , section: section
    }
  }
  
  export let onPostChangeActionCreator = (message) => {
      return {
        type:'UPDATE-NEW-POST-TEXT', message: message  
      }
  }
  
  export let onNameChangeActionCreator = (namepost) => {
      return {
        type:'UPDATE-NEW-POST-NAME', namepost: namepost 
      }
  }
  
  export let onImageURLChangeActionCreator = (urlimage) => {
      return {
        type:'UPDATE-NEW-POST-IMAGE-URL', urlimage: urlimage 
      }
  }

  export let onSectionActionCreator = (section) => {
    return {
      type: 'UPDATE-NEW-SECTION', section: section
    }
  }


export default PostsEditReducer;