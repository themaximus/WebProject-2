import c from './Header.module.css';
import HeaderLogo from './HeaderLogo';
import Menu from './HeaderMenu/Menu';
import MenuIcon from './HeaderMenu/MenuIcon';


const Header = () => {
    return (
        <div className={c.Header}>
            <HeaderLogo />
            <MenuIcon />
            <Menu />
        </div>
    )
}

export default Header;