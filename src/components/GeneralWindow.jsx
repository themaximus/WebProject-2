import Content from "./PagesBase/Content"
import Header from "./Header/Header"
import c from './GeneralWindow.module.css';
import FrontOpacity from "./FrontNewsBoard/FrontOpacity/FrontOpacity";



const GeneralWindow = (props) => {
    return (
        <div className={c.GeneralWindow}>
            <Header/>
            <Content PostsEdit={props.PostsEdit}  />
            <FrontOpacity/>
        </div>
    )
}

export default GeneralWindow;