import Menuu from './dropSpoiler';
import Menuu2 from './dropSpoiler2';
import c from './Menu.module.css';


const Menu = () => {
    return (
        <div className={c.Menu} id='Men' onClick= {Menuu2} >
        <div>Главная</div>
        <div>Видеотека</div>
        <div>Проигрователь</div>
        </div>
    )
}

export default Menu;