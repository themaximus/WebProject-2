import { NavLink } from 'react-router-dom';
import c from './Menu.module.css';


const Menu = () => {
    return (
        <div className={c.Menu} id='Men'  >
        <div className={c.MenuOpacity} ></div>
        <NavLink to='/content'><p className={c.MenuItemFirst}>Главная</p></NavLink>
        <p className={c.MenuItem}>Вильтарский Соннектион</p>
        <NavLink to='/Blender3D'><p className={c.MenuItem}>Blender 3D</p></NavLink>
        <p className={c.MenuItem}>Unity 3D</p>
        <p className={c.MenuItem}>Музыка</p>
        <p className={c.MenuItem}>Кулинария</p>
        <p className={c.MenuItem}>Галлерея</p>
        </div>
        
    )
}

export default Menu;