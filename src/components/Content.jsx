import FrontNewsBoard from "./FrontNewsBoard/FrontNewsBoard"
import Header from "./Header/Header"
import MiniNewsBoard from "./MiniNewsBoard/MiniNewsBoard"



const Content = () => {
    return (
        <div>
           <MiniNewsBoard />
           <FrontNewsBoard />
        </div>
    )
}

export default Content;