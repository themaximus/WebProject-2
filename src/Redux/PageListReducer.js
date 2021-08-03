import { NavLink } from "react-router-dom";





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
        {id:'9', pageName:'Редактировать'},
        //{id:'9', pageName:<NavLink to="/EditMod">Редактировать</NavLink>},
    ],
    PageListHeader: [
        {id:'1', pageName:<NavLink to="/content" style={{ textDecoration: 'none' , color: 'black'}}>Главная</NavLink>},
        {id:'2', pageName:'Вильтарский Соннектион'},
        {id:'3', pageName:<NavLink to="/Blender3D" style={{ textDecoration: 'none' , color: 'black'}}>Blender 3D</NavLink>},
        {id:'4', pageName:'Unity 3D'},
        {id:'5', pageName:'Музыка'},
        {id:'6', pageName:'Статьи'},
        {id:'7', pageName:'Галлерея'},
        {id:'8', pageName:'Мемуары'},
        {id:'9', pageName:'Кулинария'},
        {id:'10', pageName:<NavLink to="/EditMod" style={{ textDecoration: 'none', color: 'black' }}>Редактировать</NavLink>},
    ],
};


const PageListReducer = (PageList = InitialState, action) => {
    switch (action.type) {
        
        default:
            return PageList;
    }

    
}


export default PageListReducer;