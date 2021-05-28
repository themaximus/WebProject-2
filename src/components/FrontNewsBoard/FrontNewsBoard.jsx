import c from './FrontNewsBoard.module.css';
import FrontNewsSlider from './FrontNewsSlider/FrontNewsSlider.jsx';



const FrontNewsBoard = () => {
    return (
        <div className={c.FrontNewsBoard}>
            <FrontNewsSlider />
            <a>Главная статья с изображением и заголовком</a>
        </div>
    )
}


export default FrontNewsBoard;