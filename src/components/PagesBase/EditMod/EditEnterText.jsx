import c from "./EditEnterText.module.css";
import React from "react";


const EditEnterText = (props) => {
  let newPostElement1 = React.createRef();
  let newPostElement2 = React.createRef();
  let newPostElement3 = React.createRef();
   
  

  let AddPost = () => {
    let namepost = newPostElement2.current.value;
    let message = newPostElement1.current.value;
    let urlimage = newPostElement3.current.value;

    
    
    
   
   props.addPost(namepost, message, urlimage);
  };

  return (
    <div>
      <div className={c.NamePostText3}>Раздел</div>

      <div className={c.EditInputContaner3}></div>
      <div className={c.EditModMenu5}>
        <div className={c.EditModMenu2}>Выбрать</div>
        <img
          src="https://i.ibb.co/18HdbZx/Edit-Options.png"
          className={c.img3}
        ></img>
      </div>

      <div className={c.NamePostText4}>URL превью изображения в баннере</div>
      <div className={c.EditInputContaner2}>
        <textarea className={c.textarea2} ref={newPostElement3}></textarea>
      </div>

      <div className={c.NamePostText}>Заголовок</div>
      <div className={c.EditInputContaner2}>
        <textarea className={c.textarea2} ref={newPostElement2}></textarea>
      </div>
      <div className={c.NamePostText2}>Содержимое</div>
      <div className={c.EditInputContaner}>
        <textarea className={c.textarea} ref={newPostElement1}></textarea>
      </div>

      <div className={c.EditModMenu}>
        <div className={c.EditModMenuOptions}>Настройки</div>
        <img
          src="https://i.ibb.co/18HdbZx/Edit-Options.png"
          className={c.img2}
        ></img>
      </div>

      <div className={c.EnterText} onClick={AddPost}>
        <div className={c.EnterName}>Запостить</div>
        <img
          src="https://i.ibb.co/Prdw5Rk/Post-Enter.png"
          className={c.img}
        ></img>
      </div>
    </div>
  );
};

export default EditEnterText;
