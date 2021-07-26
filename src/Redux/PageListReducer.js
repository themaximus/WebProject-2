




let InitialState = {
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
};


const PageListReducer = (PageList = InitialState, action) => {
    switch (action.type) {
        
        default:
            return PageList;
    }

    
}


export default PageListReducer;