import c from './Header.module.css';
import HeaderLogo from './HeaderLogo';
import Menu from './HeaderMenu/Menu';
import MenuIcon from './HeaderMenu/MenuIcon';
import HeaderProfile from './HeaderProfile/HeaderProfile';
import DialogueContainer from './HeaderProfile/ProfilePreview/DialogueWindow/DialogueContainer';



const Header = (props) => {
    return (
        <div className={c.Header}>
            <HeaderLogo />
            <MenuIcon />
            <div className={c.betatest}>Тестовая версия сайта. Содержимое не имеет финальный вид.</div>
            <Menu  PageList={props.PageList} />
            <HeaderProfile/>
            <DialogueContainer newPersonalMessage={props.newPersonalMessage} PersonalMessage={props.PersonalMessage} dispatch={props.dispatch} DialogueList={props.DialogueList} className={c.PreviewMessage}/>
            
        </div>
    )
}

export default Header;