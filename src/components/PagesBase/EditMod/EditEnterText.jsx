import c from "./EditEnterText.module.css";
import React from "react";
import EditMenuPagesObject from "./EditMenuPagesObject";
import PostInside from "../../PostObject/PostInside";








const EditEnterText = (props) => {
  let newPostElement1 = React.createRef();
  let newPostElement2 = React.createRef();
  let newPostElement3 = React.createRef();
  let newPostElement4 = React.createRef();
  

  let AddPost = () => {
    let urlimage = newPostElement1.current.value;
    let namepost = newPostElement2.current.value;
    let message = newPostElement3.current.value;
    let section = newPostElement4.current.value;
    props.AddPost(namepost, message, urlimage, section);
   //props.dispatch(addPostActionCreator(namepost, message, urlimage, section));
   //namepost, message, urlimage
  // urlimage: urlimage , namepost: namepost , message: message  
  };

  let onPostChange = () => {
    let message = newPostElement3.current.value;
    props.onPostChange(message);
    //props.dispatch(onPostChangeActionCreator(message));
    //message
  }

  let onNameChange = () => {
    let namepost = newPostElement2.current.value;
    props.onNameChange(namepost);
    //namepost
  }

  let onImageURLChange = () => {
    let urlimage = newPostElement1.current.value;
    props.onImageURLChange(urlimage);
    //urlimage
  }

  let onSectionChange = () => {
    let section = newPostElement4.current.value;
    props.onSectionChange(section);
    //section
    
  }


  // открыть/закрыть меню настроек редактора.

  let EditBlockMenuOpen = () => {
    let Menu = document.getElementById('EditMenu');
    let MenuOpen = document.getElementById('img2');
    let MenuClose = document.getElementById('img4');

    Menu.style.display = 'inline';
    MenuOpen.style.display = 'none';
    MenuClose.style.display = 'inline';
    
  }

  let EditBlockMenuClose = () => {
    let Menu = document.getElementById('EditMenu');
    let MenuOpen = document.getElementById('img2');
    let MenuClose = document.getElementById('img4');

    Menu.style.display = 'none';
    MenuOpen.style.display = 'inline';
    MenuClose.style.display = 'none';
    
  }

  // открыть/закрыть - меню выбора раздела внутри настроек.

  let EditBlockMenuPagesOpen = () => {
    let Menu = document.getElementById('EditBlockObject');
    let MenuOpen = document.getElementById('img5');
    let MenuClose = document.getElementById('img6');

    Menu.style.display = 'inline';
    MenuOpen.style.display = 'none';
    MenuClose.style.display = 'inline';
    
  }


 

  return (
    <div>
      

      <div className={c.NamePostText}>Заголовок</div>
      <div className={c.EditInputContaner2}>
        <textarea className={c.textarea2} ref={newPostElement2 } onChange={onNameChange} value={props.newPostName} ></textarea>
      </div>
      <div className={c.NamePostText2}>Содержимое</div>
      <div className={c.EditInputContaner}>
        <textarea className={c.textarea} ref={newPostElement3} value={props.newPostText}  onChange={onPostChange} /> 
       
      </div>
      
      <div className={c.EditModMenu} >
        <div className={c.EditModMenuOptions}>Настройки</div>
        <img
          src="https://i.ibb.co/18HdbZx/Edit-Options.png"
          className={c.img2} id='img2' onClick={EditBlockMenuOpen}
        ></img>
        <img src="https://i.ibb.co/SR5cyTK/white67345.png" id='img4' className={c.img4} onClick={EditBlockMenuClose}></img>
      </div>

      <div className={c.EnterText} onClick={AddPost}>
        <div className={c.EnterName}>Запостить</div>
        <img
          src="https://i.ibb.co/Prdw5Rk/Post-Enter.png"
          className={c.img}
        ></img>
      </div>
      
      
      <div className={c.EditBlockMenu} id='EditMenu'> 
      <div className={c.NamePostText3}>Раздел</div>
      
      <select className={c.EditInputContaner3} name="section" ref={newPostElement4} onClick={onSectionChange} >
      {props.objectPageOption}
      
      
      </select>
      <div className={c.NamePostText4}>URL превью изображения в баннере</div>
      <div className={c.EditInputContaner5}>
        <input className={c.textarea5} ref={newPostElement1} onChange={onImageURLChange} value={props.newPostImageURL} ></input>
      </div>
      </div>
    </div>
  );
};

export default EditEnterText;
