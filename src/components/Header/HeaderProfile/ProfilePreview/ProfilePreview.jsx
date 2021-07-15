import c from './ProfilePreview.module.css';
import ProfilePreviewName from './ProfilePreviewName.jsx';
import ProfilePreviewAvatar from './ProfilePreviewAvatar.jsx';


const ProfilePreview = () => {
    return (
        <div className={c.ProfilePreview}>
            <ProfilePreviewName/>
            <ProfilePreviewAvatar/>
        </div>
    )
}

export default ProfilePreview;