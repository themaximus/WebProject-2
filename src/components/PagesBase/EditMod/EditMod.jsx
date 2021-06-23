


import FrontOpacity from "../../FrontNewsBoard/FrontOpacity/FrontOpacity";
import Header from "../../Header/Header";
import PostObject from "../../PostObject/PostObject";
import EditEnterText from "./EditEnterText";
import EditInput from "./EditInput";
import EditModMenu from "./EditModMenu";




const EditMod = (props) => {
    return (
        <div>
           <Header/>
           <FrontOpacity/>
           <EditInput/>

           <EditEnterText/>
           
           <PostObject posttext='куку' />
           <EditModMenu/>
        </div>
    )
}

export default EditMod;

//отправлено в app js