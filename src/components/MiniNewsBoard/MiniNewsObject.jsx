import c from './MiniNewsBoard.module.css';


const MiniNewsObject = (props) => {

    let today = new Date();

    return (
        <div className={c.MiniNewsObject} id='MiniNewsObject'>
            <p className={c.MiniNewsBoardItem}>{props.namepost}<a> </a>{today.toLocaleDateString()}</p>
        </div>
    )
}

export default MiniNewsObject;