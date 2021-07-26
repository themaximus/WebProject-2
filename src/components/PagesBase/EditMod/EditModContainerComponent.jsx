import Store from "../../../Redux/ReduxStore";
import EditMod from "./EditMod";


let Lox = Store.getState();


const EditModContainerComponent = () => {

    
    
    
    return (
        <EditMod State={Lox}  />
    )
}


export default EditModContainerComponent;
