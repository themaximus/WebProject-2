import React from "react"


let renderEntireTree = () => {
    console.log('State changed');
}

let State = {
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

   
   
}

export let addPost = ( namepost, message, urlimage ) => {
    let newPost = {
        id:3,
        namepost: namepost,
        message: message,
        urlimage: urlimage
    };

    
   
    State.PostsEdit.push(newPost);
    State.newPostText = '';
    State.newPostName = '';
    State.newPostImageURL = '';
    renderEntireTree();
}


export const updateNewPostText = (message) => {
    State.newPostText = message;
    renderEntireTree();
}

export const updateNewPostName = (namepost) => {
    State.newPostName = namepost;
    renderEntireTree();
}

export const updateNewPostImageURL = (urlimage) => {
    State.newPostImageURL = urlimage;
    renderEntireTree();
}


export let subscribe = (observer) => {
   renderEntireTree = observer;
}




export default State;

