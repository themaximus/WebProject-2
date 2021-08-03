import Content from "./PagesBase/Content"
import Header from "./Header/Header"
import c from './GeneralWindow.module.css';
import FrontOpacity from "./FrontNewsBoard/FrontOpacity/FrontOpacity";



const GeneralWindow = (props) => {
    return (
        <div className={c.GeneralWindow}>
            <Header newPersonalMessage={props.newPersonalMessage} PersonalMessage={props.PersonalMessage} DialogueList={props.DialogueList} dispatch={props.dispatch} PageList={props.PageList} />
            <Content PostsEdit={props.PostsEdit}   />
            <FrontOpacity/>
        </div>
    )
}

export default GeneralWindow;