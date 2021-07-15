import c from './DialogueInput.module.css';



const DialogueInput = () => {
    return (
        <div className={c.DialogueInput}>
            <textarea className={c.input} placeholder='Введите сообщение...'></textarea>
            <div className={c.buttonSend}><img
          src='https://i.ibb.co/vDbnpXn/enviar-icone.png'
          className={c.img}
        ></img></div>
            <div className={c.buttonSmile}><img src='https://i.ibb.co/gPGVy3T/anime-emoji-v1.png' className={c.img2}></img></div>
            <div className={c.buttonContent}><img src='https://i.ibb.co/5Gc6fgm/46159.png' className={c.img3}></img></div>
        </div>
    )
}

export default DialogueInput;