import c from "./Blender3D.module.css";
import FrontOpacity from "./FrontNewsBoard/FrontOpacity/FrontOpacity"
import Header from "./Header/Header"




const Blender3D = () => {
    return (
        <div className={c.Blender3D} >
           <Header/>
           <FrontOpacity/>
        </div>
    )
}

export default Blender3D;