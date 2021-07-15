import c from './ProfilePreviewName.module.css';



const ProfilePreviewName = () => {
    return (
        <div className={c.ProfilePreviewName}>
           <div >Максим</div> 
           <div className={c.ProfilePreviewNameStatus}>Online</div>
        </div>
    )
}

export default ProfilePreviewName;