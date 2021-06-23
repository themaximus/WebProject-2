import FrontNewsBoard from "../FrontNewsBoard/FrontNewsBoard"
import FrontOpacity from "../FrontNewsBoard/FrontOpacity/FrontOpacity"
import Header from "../Header/Header"
import MiniNewsBoard from "../MiniNewsBoard/MiniNewsBoard"



const Content = () => {
    return (
        <div>
           <MiniNewsBoard />
           <FrontNewsBoard />
           
        </div>
    )
}

export default Content;