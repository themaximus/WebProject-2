import React from "react"
import PageListReducer from "./PageListReducer";
import PersonalMessage from "./PersonalMessageReducer";
import PostsEditReducer from "./PostsEditReducer";




let Store = {
   
    _State: {
        PostsEdit: {
     
           posts: [ { id:'2', namepost:'Монеточка как эталон красоты', message:'Когда нибудь седержимое этого поста окажется в необходимом Максиму месте. Конкретного времени и даты этого события знать нельзя, но главное что оно есть. Получилось)', urlimage:'https://i.ibb.co/h2nLWQ0/1231-1.png' } ],

        newPostText:'1',
        newPostName:'1',
        newPostImageURL:'1',
        },
     
        PageList: [
            {id:'1', pageName:'Вильтарский Соннектион'},
            {id:'2', pageName:'Blender 3D'},
            {id:'3', pageName:'Unity 3D'},
            {id:'4', pageName:'Музыка'},
            {id:'5', pageName:'Статьи'},
            {id:'6', pageName:'Галлерея'},
            {id:'7', pageName:'Мемуары'},
            {id:'8', pageName:'Кулинария'},
            {id:'9', pageName:'Кирилл Махнюк'},
            
            
        ],

       // DialogList

//ЛИЧНЫЕ СООБЩЕНИЯ
        Messanger: {
        PersonalMessage: [
            {id: '1', humanMessage:'Привет Максим, это Я! Максим из будущего! У ТЕБЯ ВСЁ НА МНОГО ЛУЧШЕ ТОГО ЧТО ТЫ МОЖЕШЬ ПРЕДСТАВИТЬ!'}
            
        ],

        DialogueList: [
            {id:'1', nameDialogue:'Евкакий', avatar:'https://i.ibb.co/yfkgqJg/IMG-20210624-132452-461.jpg'},
            {id:'2', nameDialogue:'Евгения', avatar:'https://i.ibb.co/TPjGWrW/zhenev-a-181060129-760490317941922-8401020421883417395-n.jpg'},
            {id:'3', nameDialogue:'Ксения', avatar:'https://i.ibb.co/Qkf65DC/moartea-ta-217898903-947835389093732-5271045249338633342-n.jpg'},
            {id:'4', nameDialogue:'Владислав', avatar:'https://i.ibb.co/RScjstp/Jske4-Ge8xcs.jpg'}

        ],

        newPersonalMessage:'1123123',
    }
     
        
        
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

        this._State.PostsEdit =  PostsEditReducer(this._State.PostsEdit, action);
        this._State.PersonalMessage =  PersonalMessage(this._State.Messanger, action);
        this._State.PageList =  PageListReducer(this._State.PageList, action);

        
        this._renderEntireTree(this._State);
     

}
}








export default Store;
Window.Store = Store;

