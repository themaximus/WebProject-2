import { NavLink } from 'react-router-dom';
import c from './Menu.module.css';
import MenuItems from './MenuItems/MenuItems';
import MenuItemsBox from './MenuItems/MenuItemsBox';
import MenuOpacity from './MenuOpacity/MenuOpacity';



const Menu = (props) => {

    let PageListObject = props.PageList.PageListHeader.map(m => <MenuItems pageName={m.pageName} /> );
    
    return (
        <div className={c.Menu} id='Men' >
            <MenuItemsBox PageList={props.PageList.namePage} PageListObject={PageListObject}/>
            <MenuOpacity/>
            
        </div>
    )
}

export default Menu;