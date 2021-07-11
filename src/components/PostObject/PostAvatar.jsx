import c from './PostAvatar.module.css'


const PostAvatar = (props) => {
    return (
        <div className={c.PostAvatar}>
            <img src="https://vokrug.tv/pic/news/0/8/2/d/082dc37562480791991618ad90ebeb5b.jpg" className={c.img} ></img>
        </div>
    )
}

export default PostAvatar;