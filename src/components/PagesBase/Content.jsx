import FrontNewsBoard from "../FrontNewsBoard/FrontNewsBoard"

import MiniNewsBoard from "../MiniNewsBoard/MiniNewsBoard"



const Content = (props) => {

    

    
    return (
        <div>
           <MiniNewsBoard PostsEdit={props.PostsEdit}   />
           <FrontNewsBoard />
           
        </div>
    )
}

export default Content;