import c from './MiniNewsBoard.module.css';


const MiniNewsBoard = () => {
    return (
        <div className={c.MiniNewsBoard}>
            <p className={c.MiniNewsBoardItem}>Тестовая новость №2. 27.05.2021 </p>
            <p className={c.MiniNewsBoardItem}>Тестовая новость №1. 27.05.2021 </p>
            <p className={c.MiniNewsBoardItem}>Начало разработки онлайн дневника. 27.05.2021</p>
        </div>
    )
}

export default MiniNewsBoard;