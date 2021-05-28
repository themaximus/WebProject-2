import Menuu from './dropSpoiler';
import Menuu2 from './dropSpoiler2';
import c from './Menu.module.css';


const Menu = () => {
    return (
        <div className={c.Menu} id='Men'  >
        <p className={c.MenuItemFirst}>Навигатор по проектам</p>
        <p className={c.MenuItem}>Вильтарский Соннектион</p>
        <p className={c.MenuItem}>3D Моделирование</p>
        <p className={c.MenuItem}>Музыка</p>
        <p className={c.MenuItem}>Кулинария</p>
        </div>
    )
}

export default Menu;