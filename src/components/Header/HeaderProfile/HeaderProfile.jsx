import c from './HeaderProfile.module.css';
import ProfilePreview from './ProfilePreview/ProfilePreview';
import ProfilePreviewExit from './ProfilePreview/ProfilePreviewExit';
import ProfilePreviewFriends from './ProfilePreview/ProfilePreviewFriends';
import ProfilePreviewMessage from './ProfilePreview/ProfilePreviewMessage';



const HeaderProfile = () => {
    return (
        <div className={c.HeaderProfile} id='HeaderProfile'>
                <ProfilePreview />
                <ProfilePreviewMessage/>
                <ProfilePreviewFriends/>
                <ProfilePreviewExit/>
        </div>
    )
}

export default HeaderProfile;