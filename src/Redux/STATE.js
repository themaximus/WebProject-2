import React from "react"


let Store = {
   
    _State: {
        PostsEdit: [
     
            { id:'2', namepost:'Монеточка как эталон красоты', message:'Когда нибудь седержимое этого поста окажется в необходимом Максиму месте. Конкретного времени и даты этого события знать нельзя, но главное что оно есть. Получилось)', urlimage:'https://i.ibb.co/h2nLWQ0/1231-1.png' }
        ],
     
        PageList: [
            {id:'1', pageName:'Вильтарский Соннектион'},
            {id:'2', pageName:'Blender 3D'},
            {id:'3', pageName:'Unity 3D'},
            {id:'4', pageName:'Музыка'},
            {id:'5', pageName:'Статьи'},
            {id:'6', pageName:'Галлерея'},
            {id:'7', pageName:'Мемуары'},
            {id:'8', pageName:'Кулинария'},
            {id:'9', pageName:'Кирилл Махнюк'}
            
        ],
        newPostText:'',
        newPostName:'',
        newPostImageURL:'',
     
        
        
     },

     _renderEntireTree () {
        console.log('State changed');
    },

     getState() {
        return this._State;
     },

    subscribe (observer) {
        this._renderEntireTree = observer;
     },

     dispatch(action) {
         if (action.type === 'ADD-POST') {
            let newPost = {
                id:3,
                namepost: action.namepost,
                message: action.message,
                urlimage: action.urlimage
            };
            this._State.PostsEdit.push(newPost);
            this._State.newPostText = '';
            this._State.newPostName = '';
            this._State.newPostImageURL = '';
            this._renderEntireTree(this._State);
    
     }  else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        this._State.newPostText = action.message;
        this._renderEntireTree(this._State);
    } else if (action.type === 'UPDATE-NEW-POST-NAME') {
        this._State.newPostName = action.namepost;
        this._renderEntireTree(this._State);
    } else if (action.tupe === 'UPDATE-NEW-POST-IMAGE-URL') {
        this._State.newPostImageURL = action.urlimage;
        this._renderEntireTree(this._State);
    }

}
}

export let addPostActionCreator = (namepost, message, urlimage) => {
    return {
      type: 'ADD-POST',urlimage: urlimage , namepost: namepost , message: message 
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

export default Store;
Window.Store = Store;

