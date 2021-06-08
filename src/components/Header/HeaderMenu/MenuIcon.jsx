import c from './MenuIcon.module.css';
import { Menuu, Menuu2} from './dropSpoiler.js';




const MenuIcon = () => {
    return (
        <div className={c.MenuIcon} >
            <div id='Menu3' onClick={ Menuu }><img src='https://i.ibb.co/qDTPdKF/dot.png' ></img></div>
            <div id='Menu2' onClick={ Menuu2 } className={c.Menu2} ><img src='https://i.ibb.co/pXnqXBm/67345.png'></img></div>
        </div>
    )
}



export default MenuIcon;