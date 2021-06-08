import Content from "./Content"
import Header from "./Header/Header"
import c from './GeneralWindow.module.css';
import FrontOpacity from "./FrontNewsBoard/FrontOpacity/FrontOpacity";



const GeneralWindow = () => {
    return (
        <div className={c.GeneralWindow}>
            <Header/>
            <Content/>
            <FrontOpacity/>
        </div>
    )
}

export default GeneralWindow;