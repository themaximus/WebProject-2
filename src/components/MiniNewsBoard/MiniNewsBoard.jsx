import c from './MiniNewsBoard.module.css';
import MiniNewsObject from './MiniNewsObject';


const MiniNewsBoard = (props) => {

    let NewsObject = props.PostsEdit.map ( m => <MiniNewsObject namepost={m.namepost} /> ) ;

    return (
        <div className={c.MiniNewsBoard} id='MiniNewsBoard'>
            { NewsObject }
            
            <p className={c.MiniNewsBoardItem}>Значительный вклад в раздел EditMod. 08.07.2021 </p>
             <p className={c.MiniNewsBoardItem}>Полный развал жопы и прокрастинация. 18.06.2021 </p>
            <p className={c.MiniNewsBoardItem}>Первые попытки освоить Unity 3D. 05.06.2021 </p>
            <p className={c.MiniNewsBoardItem}>Создание первого слайдера. Полное осознание технологии. 03.06.2021 </p>
            <p className={c.MiniNewsBoardItem}>Тестовая новость №2. 27.05.2021 </p>
            <p className={c.MiniNewsBoardItem}>Тестовая новость №1. 27.05.2021 </p>
            <p className={c.MiniNewsBoardItem}>Начало разработки онлайн дневника. 27.05.2021</p>
        </div>
    )
}

export default MiniNewsBoard;