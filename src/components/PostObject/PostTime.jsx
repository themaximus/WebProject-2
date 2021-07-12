import c from './PostTime.module.css'


const PostTime = () => {

    let today = new Date();
    
    
    return (
        <div className={c.PostTime}>
           {today.toLocaleString()}; 
        </div>
    )
}

export default PostTime;