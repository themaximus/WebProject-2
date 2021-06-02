import c from './FrontNewsBoard.module.css';
import FrontNewsSlider from './FrontNewsSlider/FrontNewsSlider.jsx';



const FrontNewsBoard = () => {
    return (
        <div className={c.FrontNewsBoard}>
            <FrontNewsSlider />
           
        </div>
    )
}


export default FrontNewsBoard;