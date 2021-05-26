import Content from "./Content"
import Header from "./Header/Header"
import c from './GeneralWindow.module.css';



const GeneralWindow = () => {
    return (
        <div className={c.GeneralWindow}>
            <Header/>
            <Content/>
        </div>
    )
}

export default GeneralWindow;