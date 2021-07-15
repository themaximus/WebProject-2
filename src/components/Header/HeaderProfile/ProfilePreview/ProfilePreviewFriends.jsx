import c from './ProfilePreviewFriends.module.css';




const ProfilePreviewFriends = () => {
    return (
        <div className={c.ProfilePreviewFriends}>
            <img src='https://i.ibb.co/3v7SDy8/outline-accessible-forward-white-48dp.png' className={c.img}></img>
           <div className={c.Friends}>Друзья</div>
        </div>
    )
}

export default ProfilePreviewFriends;