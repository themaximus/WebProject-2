import c from './ProfilePreviewExit.module.css';




const ProfilePreviewExit = () => {
    return (
        <div className={c.ProfilePreviewExit}>
           <img src='https://i.ibb.co/F7sGC6W/outline-logout-white-48dp.png' className={c.img}></img>
           <div className={c.Exit}>Выход</div>
        </div>
    )
}

export default ProfilePreviewExit;