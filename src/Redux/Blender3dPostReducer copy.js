const ADD_POST_BLENDER3D = 'ADD-POST-BLENDER3D';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_POST_NAME = 'UPDATE-NEW-POST-NAME';
const UPDATE_NEW_POST_IMAGE_URL = 'UPDATE-NEW-POST-IMAGE-URL';
const UPDATE_NEW_SECTION = 'UPDATE-NEW-SECTION';





let InitialState = {
    posts: [ { id:'2', namepost:'Монеточка как эталон красоты', message:'Когда нибудь седержимое этого поста окажется в необходимом Максиму месте. Конкретного времени и даты этого события знать нельзя, но главное что оно есть. Получилось)', urlimage:'https://i.ibb.co/h2nLWQ0/1231-1.png', section: 'Фан-клуб Монеточки' },
    { id:'3', namepost:'Монеточка как эталон красоты', message:'Когда нибудь седержимое этого поста окажется в необходимом Максиму месте. Конкретного времени и даты этого события знать нельзя, но главное что оно есть. Получилось)', urlimage:'https://i.ibb.co/h2nLWQ0/1231-1.png', section: 'BLENDER 3D' } ],

 newPostText:'',
 newPostName:'',
 newPostImageURL:'',
 newPostSection: '1',
 
}

const Blender3dPostReducer = (Blender3d = InitialState, action) => {
    switch(action.type) {
        case ADD_POST_BLENDER3D:
            let newPost = {
                id:3,
                namepost: action.namepost,
                message: action.message,
                urlimage: action.urlimage,
                section: action.section
          };
          Blender3d.posts.push(newPost);
          Blender3d.newPostText = '';
          Blender3d.newPostName = '';
          Blender3d.newPostImageURL = '';
          Blender3d.newPostSection = '';
            return Blender3d;
            case UPDATE_NEW_POST_TEXT:
                Blender3d.newPostText = action.message;
                return Blender3d;
            case UPDATE_NEW_POST_NAME:
                Blender3d.newPostName = action.namepost;
                return Blender3d;
            case UPDATE_NEW_POST_IMAGE_URL:
                Blender3d.newPostImageURL = action.urlimage;
                return Blender3d;
            case UPDATE_NEW_SECTION:
                Blender3d.newPostSection = action.section;
                return Blender3d;
        default:
            return Blender3d; 
    }
}