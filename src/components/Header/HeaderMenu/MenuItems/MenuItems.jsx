import c from './MenuItems.module.css';


const MenuItems = (props) => {
    return (
        <div className={c.MenuItems}>
           {props.pageName}
        </div>
    )
}

export default MenuItems;