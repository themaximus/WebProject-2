
let InitialState = {
    postsContent: [ { link:'2', namepost:'Монеточка как эталон красоты', message:'Когда нибудь седержимое этого поста окажется в необходимом Максиму месте. Конкретного времени и даты этого события знать нельзя, но главное что оно есть. Получилось)', } ],

 
}

const PostContent = (PostContent = InitialState, action) => {
    switch (action.type) {
        
        default:
            return PostContent;
    }
}

export default PostContent;