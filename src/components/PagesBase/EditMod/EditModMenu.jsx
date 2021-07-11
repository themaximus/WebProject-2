import c from './EditModMenu.module.css'; 




const EditModMenu = () => {
    return (
        <div className= {c.EditModMenu} >
            <div className={c.EditModMenuOptions }>Настройки</div>
           	   <img src='https://i.ibb.co/18HdbZx/Edit-Options.png' className={c.img}></img>
        </div>
    )
}

export default EditModMenu;