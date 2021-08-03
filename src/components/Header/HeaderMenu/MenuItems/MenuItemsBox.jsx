
import c from './MenuItemsBox.module.css';


const MenuItemsBox = (props)=>{
    return (
        <div className={c.MenuItems} id='blyat'>
            {props.PageListObject}
        </div>
    )
}

export default MenuItemsBox;