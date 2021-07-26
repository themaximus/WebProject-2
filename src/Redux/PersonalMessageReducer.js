const ADD_HUMAN_MESSAGE = 'ADD-HUMAN-MESSAGE';
const UPDATE_NEW_HUMAN_MESSAGE = 'UPDATE-NEW-HUMAN-MESSAGE';

let InitialState = { 
    
        PersonalMessage: [
            {id: '1', humanMessage:'Привет Максим, это Я! Максим из будущего! У ТЕБЯ ВСЁ НА МНОГО ЛУЧШЕ ТОГО ЧТО ТЫ МОЖЕШЬ ПРЕДСТАВИТЬ!'}
            
        ],

        DialogueList: [
            {id:'1', nameDialogue:'Евкакий', avatar:'https://i.ibb.co/yfkgqJg/IMG-20210624-132452-461.jpg'},
            {id:'2', nameDialogue:'Евгения', avatar:'https://i.ibb.co/TPjGWrW/zhenev-a-181060129-760490317941922-8401020421883417395-n.jpg'},
            {id:'3', nameDialogue:'Ксения', avatar:'https://i.ibb.co/Qkf65DC/moartea-ta-217898903-947835389093732-5271045249338633342-n.jpg'},
            {id:'4', nameDialogue:'Владислав', avatar:'https://i.ibb.co/RScjstp/Jske4-Ge8xcs.jpg'}

        ],

        newPersonalMessage:'',
    
};

const PersonalMessage = (Messanger = InitialState, action) => {

    switch (action.type) {
        case ADD_HUMAN_MESSAGE:
            let newHumanMessage = {
                id:2,
                humanMessage: action.humanMessage
            };
            Messanger.PersonalMessage.push(newHumanMessage);
            Messanger.newPersonalMessage = '';
            return Messanger;
        case UPDATE_NEW_HUMAN_MESSAGE:
            Messanger.newPersonalMessage = action.PersonalMessage;
            return Messanger;
        default:
            return Messanger;
    }
}

export let addHumanMessageActionCreator = (humanMessage) => {
    return {
      type:'ADD-HUMAN-MESSAGE',  humanMessage: humanMessage
    }
}

export let onHumanMessageChangeActionCreator = (humanMessage) => {
    return {
      type:'UPDATE-NEW-HUMAN-MESSAGE', humanMessage: humanMessage
    }
}

export default PersonalMessage;
