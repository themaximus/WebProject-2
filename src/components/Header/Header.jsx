import c from './Header.module.css';
import HeaderLogo from './HeaderLogo';
import Menu from './HeaderMenu/Menu';
import MenuIcon from './HeaderMenu/MenuIcon';


const Header = () => {
    return (
        <div className={c.Header}>
            <HeaderLogo />
            <MenuIcon />
            <div className={c.betatest}><a>Тестовая версия сайта. Содержимое не имеет финальный вид.</a></div>
            <Menu />
            
        </div>
    )
}

export default Header;