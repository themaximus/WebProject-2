import React from "react"


let renderEntireTree = () => {
    console.log('State changed');
}

let State = {
   PostsEdit: [

       { id:'2', namepost:'Монеточка как эталон красоты', message:'Когда нибудь седержимое этого поста окажется в необходимом Максиму месте. Конкретного времени и даты этого события знать нельзя, но главное что оно есть. Получилось)', urlimage:'https://i.ibb.co/h2nLWQ0/1231-1.png' }
   ],

   
   
}

export let addPost = ( namepost, message, urlimage ) => {
    let newPost = {
        id:3,
        namepost: namepost,
        message: message,
        urlimage: urlimage
    };

    
   
    State.PostsEdit.push(newPost);
    renderEntireTree();
}
export let subscribe = (observer) => {
   renderEntireTree = observer;
}




export default State;

// https://img5.goodfon.ru/wallpaper/nbig/6/c2/osen-nebo-listia-colorful-iaponiia-japan-red-klen-gora-fud-2.jpg
//https://i.ibb.co/h2nLWQ0/1231-1.png