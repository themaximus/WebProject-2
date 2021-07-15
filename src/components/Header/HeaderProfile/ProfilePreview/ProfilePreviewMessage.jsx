
import c from './ProfilePreviewMessage.module.css';



let DialogueContainerOpen = () => {
    
    let DialogueOpen = document.getElementById('OpenIcon');
    let DialogueClose = document.getElementById('CloseIcon');
    let DialogueContainer = document.getElementById('DialogueContainer');
    DialogueContainer.style.display = 'inline';
    DialogueOpen.style.display = 'none';
    DialogueClose.style.display = 'inline';
}


let DialogueContainerClose = () => {
    
    let DialogueOpen = document.getElementById('OpenIcon');
    let DialogueClose = document.getElementById('CloseIcon');
    let DialogueContainer = document.getElementById('DialogueContainer');
    DialogueContainer.style.display = 'none';
    DialogueOpen.style.display = 'inline';
    DialogueClose.style.display = 'none';
}



const ProfilePreviewMessage = () => {
    return (
        <div className={c.ProfilePreviewMessage}>
        <img src='https://i.ibb.co/dmKNpM4/outline-mail-white-48dp.png' className={c.img} id='OpenIcon' onClick={DialogueContainerOpen} ></img>
        <img src='https://i.ibb.co/4ZMdKBj/outline-close-white-48dp.png' className={c.img2} id='CloseIcon' onClick={DialogueContainerClose} ></img>
        <div className={c.message}>Сообщения</div>
        

        </div>
        
    )
}

export default ProfilePreviewMessage;